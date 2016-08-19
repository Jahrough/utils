app.utils.cookie = (function () {
    'use strict';

    return {

        /**
         * @method set
         * @description set cookie (default is 1 year)
         * @param key {string}
         * @param value {string}
         * @param days {number}
         */
        set: function (key, value, days) {
            var expires = new Date();
            days = days || 365;
            expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // 1 year from now
            document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + expires.toGMTString() + ';path=/';
        },

        /**
         * @method get
         * @description get cookie
         * @param key {string}
         * @return {string}
         */
        get: function (key) {
            var i, cookie,
                data = null,
                cookies = document.cookie.split(';'),
                count = cookies.length;

            for (i = 0; i < count; i++) {
                cookie = cookies[i].split('=');
                if (key === cookie[0].trim()) {
                    data = decodeURIComponent(cookie[1]);
                }
            }

            return data;
        },


        /**
         * @method remove
         * @description  remove cookie
         * @param key {string}
         */
        remove: function (key) {
            this.set(key, '', -1);
        },


        /**
         * @method clear
         * @description clear cookies in collection
         * @param collection {object/array}
         */
        clearAll: function (collection) {
            var key, count;
            if (Array.isArray(collection)) {
                for (key = 0, count = collection.length; key < count; key++) {
                    this.remove(collection[key]);
                }
            } else {
                for (key in collection) {
                    if (collection.hasOwnProperty(key)) {
                        this.remove(collection[key]);
                    }
                }
            }
        }
    };

}());
