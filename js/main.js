// Handler for .ready() called.
$(document).ready(function() {

    var offset = undefined;
    var postsVisible = false;

    $.ajax({
        url: "php/getIp.php"
    }).done(function ( data ) {

        var nukeList = ['24.148.31.171', '68.51.78.159', '50.240.168.105'];
        var found = $.inArray(data, nukeList) > -1;

        console.log(found);

        if (found) {
            $('.carousel-inner .item img').remove();
        }
    });

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

    $('.my-blog .row').load('blog/scrape-portfolio-81112.html');

    // Quick Scroll
    $('header .navbar a, .jump-link a').on('click', function(e) {

        // Prevent the flicker from the hash jump
        e.preventDefault();

        // grab the hash
        var hash = $(this).attr('href');

        // Call the scroll method
        scrollToAnchor(hash, offset);
    });

    // There is data in local storage
    /*if (Modernizr.localstorage
        && localStorage['posts']
        && JSON.parse(localStorage['posts'])) {

        currentTime = new Date();

        // Grab the posts from localstorage
        retrieveLocalStorage = JSON.parse(localStorage['posts']);

        // Calculate the time in minutes since last cached
        timeSinceCached = ((currentTime.getTime() - retrieveLocalStorage['cachedAt']) / 1000) / 60;

        // Reset the cache if it is greater than 5 minutes old
        if (timeSinceCached > 5) {

            // clear storage
            localStorage.clear();
            //console.warn('Local storage was cleared');
        } else {

            // Set the data if found in the cache
            $('.my-blog .row').html(retrieveLocalStorage['html']);

            // Posts are now visible this will block ajax from firing an
            // unnecessary request
            postsVisible = true;

            //console.log('Local storage was not stale');
        }

    }

    // If the posts are already displayed then don't perform the ajax
    if (postsVisible !== true) {

        // Blog Posts section
        $.ajax({
            url: "php/getPosts.php"
        }).done(function ( data ) {

            // Cache the result
            if (Modernizr.localstorage) {

                // Get Current time
                var cachedAt = new Date().getTime();

                // Format blog html and time cached
                var posts = {
                    'html': data,
                    'cachedAt': cachedAt
                };

                // Convert to json and place into localstorage
                localStorage['posts'] = JSON.stringify(posts);
            }

            $('.my-blog .row').html(data);
            //console.log('A new ajax call was made');
        });
    }*/


    // Remove form action. If js disabled then we have a graceful fallback
    $('.hire-me-form').removeAttr('action');

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

            $.ajax({
                type: "POST",
                url: 'php/doMail.php',
                data: $(form).serialize()

            }).done(function (data) {

                // Parse the JSON data
                parsedJSON = JSON.parse(data);

                // If this is not successful
                if (parsedJSON['errorFlag']) {
                    parsedJSON['msg'] = '<span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;' + parsedJSON['msg'];
                    $('.form-error').fadeIn().find('.alert').html(parsedJSON['msg']);
                } else {
                    $('.form-error').fadeOut();
                    $('.form-success').html(parsedJSON['msg']).fadeIn().delay(1000).fadeOut();
                    // Remove form data
                    $('.hire-me-form input[type=text], .hire-me-form textarea, .hire-me-form input[type=email], .hire-me-form input[type=number]').val('');
                }

            });
        },

        // Remove Error message after labels
        errorPlacement: function(error,element) {
            return true;
        },

        // If form invalid
        invalidHandler: function (e, validator) {
            var msg    = '';
            var errorCount = validator.numberOfInvalids();

            msg = '<span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;There were ' + errorCount + ' error(s) encountered.<br />';

            if (validator.errorList.length > 0) {
                for (x=0;x<validator.errorList.length;x++) {
                    msg += '<span><strong>' + validator.errorList[x].element.name + '</strong>: ' + validator.errorList[x].message + '</span><br />';

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
                  .delay(10000)
                  .fadeOut(400, cycle);

        i = ++i % divs.length;

    })();

});




