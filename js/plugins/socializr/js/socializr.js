/**
 * Socializr
 *
 * A Social Feed widget for multiple networks.  Most notably is support
 * for twitter 1.1.
 *
 * @author Joshua Frankel <joshmfrankel@gmail.com>
 * @copyright Copyright (c) 2013, Joshua Frankel
 * @link http://www.joshfrankel.me
 * @link https://github.com/joshmfrankel/socializr
 * @see  Twitteroauth https://github.com/abraham/twitteroauth for authentication details
 * @version 0.1
 */

/**
 * Wrap the plugin in the jquery dollar sign, which will prevent overriding other
 * methods with the same name as this plugin.  Additionally we can call $ to
 * reference jQuery
 */
(function($) {

    // The Socializr Class Definition
    var Socializr = function(element, options) {

        // Store the basic class data
        var elem = $(element);
        var obj = this;

        // Default Plugin properties
        var defaults = {
            services: []
        };

        // Merge the passed in options with the defaults
        options = $.extend({}, defaults, options);

        // Public method
        this.publicMethod = function() {
            console.log('publicMethod() called!');
            console.log(options);
            console.log(elem);
        };

        // Private method
        var privateMethod = function() {
            console.log('private called');
        };
    };

    // Register the plugin name as a function in jQuery
    // Takes options parameter for overridding defaults
    $.fn.socializr = function(options) {

        // Allow chaining by returning the this keyword
        return this.each(function() {

            // Cache the jquery keyword for future usage
            var $this = $(this);

            // If the obj alread exists return
            if ($this.data('socializr')) return;

            // Instantiate a new Socializr Obj
            var socializr = new Socializr(this, options);

            // Store plugin object in this element's data
            $this.data('socializr', socializr);
        });

    }; // End Plugin

})(jQuery);
