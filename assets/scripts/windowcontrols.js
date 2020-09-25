const {remote} = require('electron');
const win = remote.getCurrentWindow();

$('#appTopbar__windowMinimize').click(function () {
    win.minimize();
});

$('#appTopbar__windowMaximize').click(function () {
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
    console.log('[Electron] Current window is maximized: ' + win.isMaximized());
});

$('#appTopbar__windowClose').click(function () {
    win.close();
});