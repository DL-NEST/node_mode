import { Menu, MenuItem } from 'electron';
/** 注册窗口菜单 */
const menu = new Menu();
menu.append(
  new MenuItem({
    label: 'Electron',
    submenu: [
      {
        role: 'help',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('TH');
        },
      },
      {
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Alt+s' : 'Alt+Shift+I',
        click: () => {
          console.log('TH');
        },
      },
    ],
  }),
);
export {menu};

/** 注册右键菜单 */
// sub-menu
