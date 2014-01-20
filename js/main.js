// Handler for .ready() called.
$(document).ready(function() {

    var offset = undefined;

    // Scrollspy
    $('body').scrollspy({
        target: 'header nav.navbar .container',
        offset: 590
    });

    // Starting width
    var width = $(window).width();

    // If starting mobile
    if (width < 753) {
        offset = 75;
    }

    // On resize of windows check offset for mobile vs desktop
    $(window).resize(function() {
        width = $(window).width();
        offset = undefined;
        if (width < 753) {
            offset = 75;
        }
    });

    // Tooltips
    $('.tooltip-hook').tooltip();

    // Fire tooltips
    $('.fire').hover(function() {
        $(this).next('.tooltip').addClass('fire-tooltip');
    });

    // Quick Scroll
    $('header .navbar a, .jump-link a').on('click', function(e) {

        // Prevent the flicker from the hash jump
        e.preventDefault();

        // grab the hash
        var hash = $(this).attr('href');

        // Call the scroll method
        scrollToAnchor(hash, offset);
    });

    // Blog Posts section
    $.ajax({
        url: "php/getPosts.php"
    }).done(function ( data ) {
        //console.log(data);
        $('.my-blog .row').html(data);
    });

    // Validation of form
    $('.hire-me-form').validate({
        rules: {
            field: {
                email: {
                    required: true,
                    email: true
                },
                math: {
                    required: true,
                    digits: true,
                    range: [4, 6]
                }
            }
        },

        // Success!
        submitHandler: function(form) {

            // Fade in success message
            $('.form-success').fadeIn();

            // Submit Form
        },
        invalidHandler: function (e, validator) {
            var msg  = '';

            if (validator.errorList.length > 0) {
                for (x=0;x<validator.errorList.length;x++) {
                    //errors += "\n\u25CF " + validator.errorList[x].message;
                    msg += '<p><strong>' + validator.errorList[x].element.name + '</strong>: ' + validator.errorList[x].message + '</p>';

                }
            }
            $('.form-error').fadeIn().find('.alert').html(msg);
        }
    });

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




