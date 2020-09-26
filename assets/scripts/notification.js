var appname = 'Luxic';
var appnotimsg = 'Main Window Loaded';
var appicon = 'assets/build/appicon.ico';
var appnameDevEnv = 'Luxic';
var appnotimsgDevEnv = 'Development Environment Enabled';
var appiconDevEnv = 'assets/build/DEVappicon.ico';

var notification = new Notification(appname, {
    body: appnotimsg,
    icon: appicon,
    silent: true
});

var notificationDevEnv = new Notification(appnameDevEnv, {
    body: appnotimsgDevEnv,
    icon: appiconDevEnv,
    silent: true
});