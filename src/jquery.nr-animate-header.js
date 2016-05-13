/*
 * nr-animate-header
 * https://github.com/nicolasromer/Animate-Site-Title
 *
 * Copyright (c) 2016 Nicolas Romer
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.nr_animate_header = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.nr_animate_header = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.nr_animate_header.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.nr_animate_header.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].nr_animate_header = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
