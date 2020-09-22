const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
    var mainWindow = new BrowserWindow({
        title: 'Luxic',
        width: 1170,
        height: 650,
        minWidth: 1170,
        minHeight: 650,
        icon: 'assets/build/appicon.ico',
        backgroundColor: '#171A1F',
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            webSecurity: false
        }
    });

    mainWindow.loadURL(`file://${path.join(__dirname, '../../mainWindow.html')}`);

    console.log('[Electron] Main Window Loaded');

    // var devWindow = new BrowserWindow({
    //     title: 'Development Environment',
    //     width: 1170,
    //     height: 650,
    //     minWidth: 1170,
    //     minHeight: 650,
    //     icon: 'assets/build/DEVappicon.ico',
    //     backgroundColor: '#171A1F',
    //     frame: false,
    //     webPreferences: {
    //         nodeIntegration: true,
    //         enableRemoteModule: true
    //     }
    // });

    // devWindow.loadURL(`file://${path.join(__dirname, '../../devWindow.html')}`);

    // console.log('[Electron] Development Environment Enabled');
    // devWindow.webContents.openDevTools();
}

app.on('ready', createWindow);