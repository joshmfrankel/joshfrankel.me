// Handler for .ready() called.
$(document).ready(function() {

    // Scrollspy
    $('body').scrollspy({
        target: 'header nav.navbar .container',
        offset: 75
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

    var width = $(window).width();

    // Tooltips only load if the site starts desktop
    if (width > 753) {
        $('.tooltip-hook').tooltip();


    }

    $('.fire').hover(function() {
        var test = $(this).next('.tooltip').addClass('fire-tooltip');
        console.log(test);
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




