
module.exports = {
  src: './src/**/*.ts',
  ignoredGlobs: ['!./src/**/*.test.ts', '!./src/**/__mocks__/*'],
  npm: {
    dist: './npm/',
    package: 'package.json',
    license: './LICENSE',
    readme: './README.md'
  },
  metadataPath: './metadata/integration-data.json',
  generatedComponentsDir: './src',
  coreComponentsDir: './src/core',
  indexFileName: './src/index.ts',
  configComponent: './core/index',
  widgetsPackage: 'devextreme'
};
