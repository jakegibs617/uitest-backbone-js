/*global UiTest, Backbone*/

UiTest.Collections = UiTest.Collections || {};

(function () {
    'use strict';

    UiTest.Collections.Blog = Backbone.Collection.extend({

        model: UiTest.Models.Blog

    });

})();
