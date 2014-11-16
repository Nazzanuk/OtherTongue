'use strict';

var app = angular.module('otherTongue');

app.controller('buttonCtrl', function ($scope, NavService) {
    $scope.NavService = NavService;

});
