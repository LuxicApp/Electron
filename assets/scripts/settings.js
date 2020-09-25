$('#settings__show').on('click', function (e) {
    $('#settings__overlay').toggleClass("settingsHide");
    console.debug('%cSettings Overlay: Active', 'color: #0C97E4;');
});

$('#settings__close').on('click', function (e) {
    $('#settings__overlay').toggleClass("settingsHide");
    console.debug('%cSettings Overlay: Hidden', 'color: #0C97E4;');
});