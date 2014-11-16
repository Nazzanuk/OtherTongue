'use strict';

var app = angular.module('otherTongue');

app.directive('place', function ($compile, $rootScope) {

    return {
        restrict: 'AE',
        link: function (scope, elem, attrs) {
            var $screen = $("[screen='" + attrs.screen + "']");
            $screen.insertBefore($(elem));
            $(elem).remove();
            $compile($screen)(scope);
        }
    };
});
