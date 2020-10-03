$(function() {
    $('.library__gridItem').lazy();
});

$(function() {
    $('.library__gridItem video').lazy();
});

$(".library__gridItem").mouseout(function () {
    $("video", this).get(0).currentTime = 0
});