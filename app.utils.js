app.utils = (function ($) {
    'use strict';

    return {

        /**
         * Set matched elements to the same height by row.
         * @param {object} $element jQuery selector
         */
        setRowHeight: function ($element) {
            if ((typeof $element === 'object') && $element.is(':visible')) {
                var heights = [];

                $element.each(function (index) {
                    var $current = $(this),
                        currentTop = $current.position().top,
                        $previous = $current.prev();

                    if (($previous.length > 0) && (currentTop !== $previous.position().top)) {
                        $element.slice((index - heights.length), index).height(Math.max.apply(Math, heights));
                        heights = [];
                    } else if (currentTop === $element.last().position().top) {
                        $element.slice(index - heights.length, index + 1).height(Math.max.apply(Math, heights));
                        heights = [];
                    }

                    heights.push($current.height());
                });
            }
        }

    };


}(jQuery));