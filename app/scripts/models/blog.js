/*global UiTest, Backbone*/

UiTest.Models = UiTest.Models || {};

(function () {
    'use strict';

    UiTest.Models.Blog = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
