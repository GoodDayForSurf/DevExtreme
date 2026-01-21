import { spawn } from 'node:child_process';
import http from 'node:http';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..', '..', '..', '..');
const ssrAppDir = resolve(repoRoot, 'packages/devextreme-angular/tests/ssr-app');
const testcafeDir = resolve(repoRoot, 'packages/devextreme-angular/tests/ssr-testcafe');
const testcafeConfig = resolve(__dirname, '.testcaferc.json');
const port = Number(process.env.SSR_APP_PORT || 4200);
const baseUrl = `http://localhost:${port}/`;

const runCommand = (command, args, options = {}) => new Promise((resolvePromise, rejectPromise) => {
  const child = spawn(command, args, {
    shell: true,
    stdio: 'inherit',
    ...options,
  });

  child.on('close', (code) => {
    if (code === 0) {
      resolvePromise();
    } else {
      rejectPromise(new Error(`${command} ${args.join(' ')} failed with code ${code}`));
    }
  });
});

const waitForServer = (url, timeoutMs = 60000) => new Promise((resolvePromise, rejectPromise) => {
  const timeoutAt = Date.now() + timeoutMs;

  const ping = () => {
    http.get(url, (response) => {
      response.resume();
      if (response.statusCode && response.statusCode >= 200 && response.statusCode < 500) {
        resolvePromise();
        return;
      }
      response.on('end', scheduleRetry);
    }).on('error', scheduleRetry);
  };

  const scheduleRetry = () => {
    if (Date.now() > timeoutAt) {
      rejectPromise(new Error(`SSR server did not respond at ${url}`));
      return;
    }
    setTimeout(ping, 500);
  };

  ping();
});

const startServer = () => spawn('pnpm', ['--dir', ssrAppDir, 'run', 'start',  '--port', String(port)], {
  shell: true,
  stdio: 'inherit',
  env: process.env,
});

let serverProcess;

const shutdownServer = () => {
  if (serverProcess?.pid) {
    const pid = serverProcess.pid;
    if (process.platform === 'win32') {
      spawn('taskkill', ['/PID', String(pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
    } else {
      serverProcess.kill('SIGTERM');
    }
    serverProcess = undefined;
  }
};

process.on('SIGINT', () => {
  shutdownServer();
  process.exit(130);
});

process.on('SIGTERM', () => {
  shutdownServer();
  process.exit(143);
});

try {
  console.log(`Starting ssr-app on ${baseUrl}`);
  serverProcess = startServer();
  await waitForServer(baseUrl);
  console.log('ssr-app is ready, starting TestCafe');

  await runCommand(
    'pnpm',
    [
      '--dir',
      testcafeDir,
      'exec',
      'testcafe',
      '--config-file',
      testcafeConfig,
      '--reporter',
      'spec',
      '--page-load-timeout',
      '60000',
      '--selector-timeout',
      '10000',
      '--assertion-timeout',
      '10000',
    ],
    {
      env: {
        ...process.env,
        SSR_APP_URL: baseUrl,
      },
    },
  );
  console.log('TestCafe finished');
} finally {
  shutdownServer();
}
