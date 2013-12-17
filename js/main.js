// Handler for .ready() called.
$(document).ready(function() {

    // Scrollspy
    $('body').scrollspy({
        target: 'header nav.navbar',
        offset: 150
    });



    // Quick Scroll
    $('header .navbar a, .jump-link a').on('click', function(e) {

        // Prevent the flicker from the hash jump
        e.preventDefault();

        // grab the hash
        var hash = $(this).attr('href');

        // Call the scroll method
        scrollToAnchor(hash);
    });

    // Tooltips
    $('.tooltip-hook').tooltip();

    // TODO: disable menu tooltip on responsive


    // Cycle
    // todo turn into plugin
    var divs = $('#testimonial .testimonial-single').hide(),
    i = 0;

    (function cycle() {

        divs.eq(i).fadeIn(400)
                  .delay(5000)
                  .fadeOut(400, cycle);

        i = ++i % divs.length;

    })();

});




