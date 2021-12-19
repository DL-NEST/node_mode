import serialport from 'serialport';
import {ipcMain} from 'electron';

export default function() {
  ipcMain.on('serialport_list', (event) => {
    serialport.list().then((ports) => {
      console.log(ports);
        },
    );
  });
}
