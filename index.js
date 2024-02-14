$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var loveMessage = $(".love-message");
    var sadFace = $(".sad-face");

envelope.click(function() {
    open();
});
btn_open.click(function() {
    open();
});
btn_reset.click(function() {
    close();
    resetAnimations();
});
function open() {
    envelope.addClass("open")
    .removeClass("close");
}
function close() {
    envelope.addClass("close")
    .removeClass("open");
}
function showLoveAnimation() {
    loveMessage.addClass("show");
}
function showSadFaceAnimation() {
    sadFace.addClass("show");
}
function resetAnimations() {
    loveMessage.removeClass("show");
    sadFace.removeClass("show");
}
});