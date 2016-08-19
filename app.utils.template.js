app.utils.template = (function ($) {
    'use strict';

    /*
     * @method _setTemplate($template);
     * @description Set the template to bind your data to
     * @param {element} $template
     * @return {function} mergeData
     */
    var _setTemplate = function _setTemplate($template) {

        /*
         * @method _mergeData(data);
         * @description Bind your data to the set template
         * @param {object} data
         * @return {string} html
         */
        return function _mergeData(data) {
            var key, pattern, html = '';

            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    pattern = new RegExp('{{' + key + '}}', 'igm');
                    html = (html || $template.html() || $template.text()).replace(pattern, data[key]);
                }
            }

            return html;
        };
    };


    /*
     * @method _template(template, collection);
     * @description html templating for javascript code
     * @param {element} template
     * @param {array/object} collection
     */
    var _template = function _template(template, collection) {
        var i, count, _mergeData, html = '', $template = $(template);

        if (($template.length > 0) && (typeof collection === 'object')) {
            _mergeData = _setTemplate($template);

            if (Array.isArray(collection)) {
                for (i = 0, count = collection.length; i < count; i++) {
                    html += _mergeData(collection[i]);
                }
            } else {
                html = _mergeData(collection);
            }

        } else {
            throw new Error('app.utils.template()', 'Please verify your template is being used correctly.');
        }

        return html.replace(/({{)+\w+(}})/igm, '');
    };


    return function (template, collection) {
        try {
            return _template(template, collection);
        } catch (e) {
            console.log(e.name, e.message, '| in: ' + template);
        }
    };

}(jQuery));
