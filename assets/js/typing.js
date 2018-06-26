var captionLength = 0;
var caption = '';
var erased = 0;


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');

    testTypingEffect();

});

function testTypingEffect() {
    //caption = $('input#user-caption').val();
    caption = "Hello, my name is <b><i>Xiao</i></b> and I am a ";
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 150);
        if (captionLength == 18){
          captionLength = 24;
        }
        if (captionLength == 28){
          captionLength = 36;
        }
    } else {
        captionLength = 0;
        caption = '';
    }
}
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
