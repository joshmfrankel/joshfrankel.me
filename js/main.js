// Handler for .ready() called.
$(document).ready(function() {

    // Scrollspy
    $('body').scrollspy({
        target: 'header nav.navbar',
        offset: 150
    });

    // Tooltips
    $('.tooltip-hook').tooltip();



    // TODO: disable menu tooltip on responsive

    // Quick Scroll
    $('header .navbar a, .jump-link a').on('click', function(e) {

        // Prevent the flicker from the hash jump
        e.preventDefault();

        // grab the hash
        var hash = $(this).attr('href');

        // Call the scroll method
        scrollToAnchor(hash);
    });

});
