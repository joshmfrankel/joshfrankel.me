// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];


        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
function scrollToAnchor(id, offset) {

    // Calc header height
    var headerHeight = parseFloat($('header .navbar').css('height'));

    // Force blug bg to be at top after scroll
    if (id === '#Hire-Me' && offset !== 'undefined') {
        offset = 40;
    }

    // Offset default
    offset = (typeof offset === 'undefined') ? headerHeight : offset;

    // ScrollTop
    $('html,body').stop().animate({
        scrollTop: $(id).offset().top - offset
    },
    {
        duration: 'slow',
        easing: 'swing'
    });
}
