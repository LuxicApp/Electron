var appname = 'Luxic';
var appnotimsg = 'Main Window Loaded';
var appicon = 'assets/build/appicon.ico';
var DEVappname = 'Luxic';
var DEVappnotimsg = 'Development Environment Enabled';
var DEVappicon = 'assets/build/DEVappicon.ico';

var notification = new Notification(appname, {
    body: appnotimsg,
    icon: appicon,
    silent: true
});

var notification = new Notification(DEVappname, {
    body: DEVappnotimsg,
    icon: DEVappicon,
    silent: true
});