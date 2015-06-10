$(function() {
    var changeWidth = function(mq) {
        if (mq.matches) {
            $('.logo').attr('src', 'images/mobile_logo.jpg');
            $('#first_callout').parent().appendTo('#callouts');
        } else {
            $('.logo').attr('src', 'images/logo.jpg');
            $('#first_callout').parent().prependTo('#callouts');
        }
    }
    
    if (matchMedia) {
        var mq = window.matchMedia("only screen and (max-width: 767px)");
    
        mq.addListener(changeWidth);
    
        changeWidth(mq);
    }
});