const {app, BrowserWindow, win} = require('electron');
const path = require('path');
const url = require('url');
require('./../libs/jquery-3.5.1.min.js')

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
            enableRemoteModule: true,
            webSecurity: true,
            preload: 'preload.js',
            worldSafeExecuteJavaScript: true
        }
    });

    mainWindow.loadURL(`file://${path.join(__dirname, '../../mainWindow.html')}`);
    mainWindow.webContents.openDevTools();

    console.debug('[Electron] Main Window Loaded');

    var devWindow = new BrowserWindow({
        title: 'Development Environment',
        width: 1170,
        height: 650,
        minWidth: 1170,
        minHeight: 650,
        icon: 'assets/build/DEVappicon.ico',
        backgroundColor: '#171A1F',
        frame: false,
        webPreferences: {
            enableRemoteModule: true,
            webSecurity: true,
            preload: 'preload.js',
            worldSafeExecuteJavaScript: true
        }
    });

    devWindow.loadURL(`file://${path.join(__dirname, '../../devWindow.html')}`);
    console.debug('[Electron] Development Environment Enabled');
}

app.on('ready', createWindow);