// Handler for .ready() called.
$(document).ready(function() {

    var offset = undefined;

    // Scrollspy
    $('body').scrollspy({
        target: 'header nav.navbar .container',
        offset: 570
    });

    var width = $(window).width();

    // Tooltips only load if the site starts desktop
    if (width > 753) {
        $('.tooltip-hook').tooltip();
    } else {
        offset = 75;
    }

    console.log(offset);

    // Quick Scroll
    $('header .navbar a, .jump-link a').on('click', function(e) {

        // Prevent the flicker from the hash jump
        e.preventDefault();

        // grab the hash
        var hash = $(this).attr('href');

        // Call the scroll method
        scrollToAnchor(hash, offset);
    });





    $('.fire').hover(function() {
        $(this).next('.tooltip').addClass('fire-tooltip');
    });


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




