'use strict';

var app = angular.module('otherTongue');

app.service('DataService', function () {
    var that = this;

    that.user = [
        {'name':'Nathan'}
    ];

    that.groups = [
        {
            'name':'Past Tense',
            'lines':[
                {'spanish': 'tuvé','english':'I had'},
                {'spanish': 'tenía','english':'I used to have'},
            ]
        },
        {
            'name':'Past Tense',
            'lines':[
                {'spanish': 'tuvé','english':'I had'},
                {'spanish': 'tenía','english':'I used to have'},
            ]
        }
    ];


    return that;

});
