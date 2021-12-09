import {win , createWindow} from '@/background';
import {app, protocol, BrowserWindow, globalShortcut} from 'electron';
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer';


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) { createWindow(); }
});

app.on('ready', async () => {
  // Install Vue Devtools
  // if (!process.env.IS_TEST) {
  //   try {
  //     await installExtension(VUEJS3_DEVTOOLS);
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString());
  //   }
  // }
  await createWindow();
});

/** 注册全局快捷键 */
function createWatch() {
  app.whenReady().then(() => {
    // 重新加载浏览器资源
    globalShortcut.register('Alt+q', () => {
      win.reload();
    });
    // 打开开发者调试工具
    globalShortcut.register('Alt+w', () => {
      win.webContents.openDevTools({ mode: 'undocked' });
    });
  });
}

export {createWatch};
