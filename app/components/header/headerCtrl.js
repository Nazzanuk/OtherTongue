'use strict';

var app = angular.module('otherTongue');

app.controller('headerCtrl', function ($scope, NavService) {
    $scope.NavService = NavService;

});
