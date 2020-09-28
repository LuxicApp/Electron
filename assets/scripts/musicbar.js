// const { audio } = require('system-control');

$(document).ready(function () {
    $('#musicbarPlayPause').click(function () {
        var src = $("#musicbarPlayPause img").attr('src');

        if (src == "assets/cdn/icons/musicbarcontrols.svg#controlPlay")
            $("#musicbarPlayPause img").attr('src', "assets/cdn/icons/musicbarcontrols.svg#controlPause");
        else
            $("#musicbarPlayPause img").attr('src', "assets/cdn/icons/musicbarcontrols.svg#controlPlay");
    });
});

$('#musicbar__durationcontainer').on('input', function () {
    $(this).css('background', 'linear-gradient(to right, #B30EE6 0%, #B30EE6 ' + this.value + '%, #F6F4EF ' + this.value + '%, #F6F4EF 0%)');
});

$('#musicbar__volumeSlider').on('input', function () {
    $(this).css('background', 'linear-gradient(to right, #B30EE6 0%, #B30EE6 ' + this.value + '%, #F6F4EF ' + this.value + '%, #F6F4EF 0%)');
});

// $('#musicbar__volumeSlider').on('input', function () {
//     (async () => {
//         const volume = await audio.volume() // get system volume
//         try {
//           await $(this).css('background', 'linear-gradient(to right, #B30EE6 0%, #B30EE6 ' + audio.volume() + '%, #F6F4EF ' + audio.volume() + '%, #F6F4EF 0%)');
//           console.log(`volume changed from ${volume} to 80`)
//         } catch (e) {
//           console.error(e);
//         }
//       })()
// });