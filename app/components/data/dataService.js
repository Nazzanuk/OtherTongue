'use strict';

var app = angular.module('otherTongue');

app.service('DataService', function () {
    var that = this;

    that.user = [
        {'name': 'Nathan'}
    ];

    that.groups = [
        {
            'name': 'Basic',
            'lines': [
                {'spanish': ['Mañana'], 'english': ['Tomorrow']},
                {'spanish': ['Hoy'], 'english': ['Today']},
                {'spanish': ['Niño', 'Chico'], 'english': ['Boy']},
                {'spanish': ['Niños', 'Chicos'], 'english': ['Boys', 'Kids', 'Children']}
            ]
        },
        {
            'name': 'Past Tense',
            'lines': [
                {'spanish': ['tuvé'], 'english': ['I had']},
                {'spanish': ['tenía'], 'english': ['I used to have']}
            ]
        }
    ];

    that.groupIndex = 0;
    that.lineIndex = 0;
    that.phraseIndex = 0;
    that.language = 'spanish';

    that.generateLine = function () {
        that.lineIndex = _.random(0, that.groups[that.groupIndex].lines.length - 1);
        that.phraseIndex = _.random(0, that.groups[that.groupIndex].lines[that.lineIndex][that.language].length - 1);
        //that.language = _.random(0,1, that.groups[that.groupIndex][that.lineIndex]);
    };
    that.generateLine();

    that.getLine = function () {
        return that.groups[that.groupIndex].lines[that.lineIndex][that.language][that.phraseIndex];
    };

    that.getGroup = function () {
        return that.groups[that.groupIndex];
    };


    return that;

});
