/**
 * Identify plugin (for jQuery)
 * version: 1.0 (03/24/2010)
 *
 * Licensed under the MIT licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2010 Derek DeVries (derek@sportspyder.com)
 */
(function($) {

$.fn.identify = function() {
  var i = 0;
  return this.each(function() {
    if ($(this).attr('id')) return;
    do {
      i++;
      var id = 'anon_' + i;
    } while ($('#' + id).length > 0);
  
    $(this).attr('id', id);
  }).attr("id");
};

})(jQuery);
