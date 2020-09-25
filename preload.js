const $ = require('jquery');
const {remote} = require('electron');
const win = remote.getCurrentWindow();

function windowMinimize() {
    win.minimize();
}

function windowMaximize() {
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
    console.log('[Electron] Current window is maximized: ' + win.isMaximized());
}

function windowClose() {
    win.close();
}