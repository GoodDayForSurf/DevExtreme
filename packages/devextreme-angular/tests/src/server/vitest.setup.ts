import '@angular/compiler';
import 'reflect-metadata';
import 'zone.js/node';
import 'zone.js/testing';

import { TestBed } from '@angular/core/testing';
import { ServerTestingModule, platformServerTesting } from '@angular/platform-server/testing';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const domino = require('domino');
const dominoWindow = domino.createWindow('<!doctype html><html><body></body></html>');

Object.defineProperty(globalThis, 'window', {
  value: dominoWindow,
  configurable: true,
});
Object.defineProperty(globalThis, 'document', {
  value: dominoWindow.document,
  configurable: true,
});

const { setWindow } = require('devextreme/core/utils/window');
setWindow(dominoWindow);

TestBed.initTestEnvironment(
  ServerTestingModule,
  platformServerTesting(),
);
