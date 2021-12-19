import {ipcMain} from 'electron';
import {mainOptions} from '@/electron';
import {createWindow, win} from '@/background';

export default function() {
  ipcMain.on('main', (event) => {
    // win.setSize(1250, 789);
    // win.center();
    // 重新生成
    win.close();
    createWindow(mainOptions, '/main');
  });

  ipcMain.on('btn_switch', (event, args) => {
      switch (args) {
        case 'minimize':
          win.minimize();
          break;
        case 'close':
          win.close();
          break;
        case 'maximize':
          if (win.isMaximized()) {
            win.unmaximize();
          } else {
            win.maximize();
          }
          break;
      }
    },
  );

}
