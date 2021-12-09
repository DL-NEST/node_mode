'use strict';

import {app, protocol, BrowserWindow, globalShortcut, Menu, ipcMain} from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
import { join } from 'path';
import {createWatch, menu, loginOptions, mainOptions} from '@/electron';

const isDevelopment = process.env.NODE_ENV !== 'production';

// 在应用程序准备好之前，必须注册方案
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
]);

let win: BrowserWindow;
async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow(loginOptions);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) {
      console.log('test');
      // win.webContents.openDevTools();
    }
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    await win.loadURL('app://./index.html');
  }
}

// Quit when all windows are closed.
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}

/** 注册全局快捷键 */
createWatch();
/** 注册menu */
Menu.setApplicationMenu(menu);

ipcMain.on('main', (event) => {
  win.setSize(1250, 789);
  win.center();
});

export {win, createWindow};

