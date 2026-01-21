import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentNamesPath = path.resolve(__dirname, '../../dist/server/component-names.js');
const { componentNames } = await import(pathToFileURL(componentNamesPath).href);

const template = (componentNames)
  .filter((_name) => !['diagram'].includes(_name))
  .map((name) => `<dx-${name}></dx-${name}>\n`)
  .join('');

const appTemplatePath = path.resolve(__dirname, '../src/app/app.component.html');
await fs.writeFile(appTemplatePath, template, 'utf8');
