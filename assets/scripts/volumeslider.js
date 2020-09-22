$(function () {
    $('#slider').slider({
        max: 100,
        slide: function (event, ui) {
            $('#kaas').val(ui.value);
        }
    });
});




// $("#musicbar__volumeStatus").attr("src","assets/cdn/icons/volumestages.svg#volumeMute");
// $("#musicbar__volumeStatus").attr("src","assets/cdn/icons/volumestages.svg#volumeLow");
// $("#musicbar__volumeStatus").attr("src","assets/cdn/icons/volumestages.svg#volumeMax");