$('#settingsShow').on('click', function (e) {
    $('#settingsOverlay').toggleClass("settingsHide");
    console.debug('%cSettings Overlay: Active', 'color: #0C97E4;');
});

$('#settingsClose').on('click', function (e) {
    $('#settingsOverlay').toggleClass("settingsHide");
    console.debug('%cSettings Overlay: Hidden', 'color: #0C97E4;');
});