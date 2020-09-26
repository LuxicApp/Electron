const settingsFs = require('fs');
const userPreferencesFile = './assets/json/user-preferences.json';


const settingsChalk = require('chalk');
const success = settingsChalk.hex('#09E189');
const warn = settingsChalk.hex('#F77500');
const error = settingsChalk.hex('#F64B4B');


$('#settings__show').on('click', function (e) {
    $('#settings__overlay').toggleClass("settingsHide");
    console.debug(success('Settings Overlay: Active'));
});

$('#settings__close').on('click', function (e) {
    $('#settings__overlay').toggleClass("settingsHide");
    console.debug(success('Settings Overlay: Hidden'));
});

// ----------------
// Settings Toggles
// ----------------

try {
  if (settingsFs.existsSync(userPreferencesFile)) {
    console.debug('%cuser-preferences.json does exist.', 'color: #00C700');
  }
} catch {
    console.debug('%cuser-preferences.json is not created.', 'color: #F64B4B');
}

$('#systeminformation1').click(function(){
    if($(this).prop("checked") == true){
        console.log("%c[Settings] Auto-update system information monthly: true", "color: #0C97E4");
    }
    else if($(this).prop("checked") == false){
        console.log("%c[Settings] Auto-update system information monthly: false", "color: #0C97E4");
    }
});

$('#systeminformation2').click(function(){
    if($(this).prop("checked") == true){
        console.log("%c[Settings] Share system information: true", "color: #0C97E4");
    }
    else if($(this).prop("checked") == false){
        console.log("%c[Settings] Share system information: false", "color: #0C97E4");
    }
});