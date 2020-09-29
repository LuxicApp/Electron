const {
    app,
    BrowserWindow,
    globalShortcut,
    remote
} = require('electron');
const path = require('path');
const chalk = require('chalk');
const success = chalk.hex('#09E189');
const warn = chalk.hex('#F77500');
const error = chalk.hex('#F64B4B');
var appnameDevEnv = 'Luxic';
var appnotimsgDevEnv = 'Development Environment Enabled';
var appiconDevEnv = 'assets/build/DEVappicon.ico';

function createWindow() {
    console.log(chalk.hex('#F64B4B')('\r\n  _   _   ___  _____ ___ \r\n | | | | | \\ \\\/ \/_ _\/ __|\r\n | |_| |_| |>  < | | (__ \r\n |____\\___\/\/_\/\\_\\___\\___|\r\n'))
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
            nodeIntegrationInWorker: true,
            enableRemoteModule: true,
            webSecurity: true,
            worldSafeExecuteJavaScript: true
        }
    });

    console.log(chalk.blue('[Electron] Main Window Loaded'));
    mainWindow.loadURL(`file://${path.join(__dirname, '../../mainWindow.html')}`);

    globalShortcut.register('F5', function () {
        console.log(success('[KeyStroke] F5'))
        console.log(success('[Electron] Reloading Window'))
        mainWindow.reload();
    });

    globalShortcut.register('CommandOrControl+R', function () {
        console.log(success('[KeyStroke] CommandOrControl + R'))
        console.log(success('[Electron] Restarting Application'))
        app.quit();
        app.relaunch();
    });

    globalShortcut.register('F6', function () {
        console.log(success('[KeyStroke] F6'))
        console.log(success('[Electron] Opening Inspect Element.'))
        mainWindow.webContents.openDevTools();
    });

    globalShortcut.register('F7', function () {
        console.log(success('[KeyStroke] F7'))
        console.log(success('[Electron] Opening developer environment'))
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
                nodeIntegration: true,
                nodeIntegrationInWorker: true,
                enableRemoteModule: true,
                webSecurity: true,
                worldSafeExecuteJavaScript: true
            }
        });
        console.log('[Electron] Developer Environment Active');
        devWindow.loadURL(`file://${path.join(__dirname, '../../devWindow.html')}`);
    });

    globalShortcut.register('CommandOrControl+F11', function () {
        console.log(success('[KeyStroke] F7'))
        console.log(success('[Electron] Opening developer environment'))
        var fullscreenWindow = new BrowserWindow({
            title: 'Luxic',
            width: 1170,
            height: 650,
            minWidth: 1170,
            minHeight: 650,
            icon: 'assets/build/appicon.ico',
            backgroundColor: '#171A1F',
            frame: false,
            fullscreen: true,
            webPreferences: {
                nodeIntegration: true,
                nodeIntegrationInWorker: true,
                enableRemoteModule: true,
                webSecurity: true,
                worldSafeExecuteJavaScript: true
            }
        });
        console.log('[Electron] Fullscreen app started');
        fullscreenWindow.loadURL(`file://${path.join(__dirname, '../../fullscreenWindow.html')}`);
        fullscreenWindow.maximize()
    });
}

app.on('ready', createWindow);