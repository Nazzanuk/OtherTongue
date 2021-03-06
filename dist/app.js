angular.module('otherTongue', []);

'use strict';

var app = angular.module('otherTongue');

app.controller('buttonCtrl', function ($scope, NavService) {
    $scope.NavService = NavService;

});


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


'use strict';

var app = angular.module('otherTongue');

app.controller('groupsCtrl', function ($scope, DataService) {
    $scope.DataService = DataService;


});


'use strict';

var app = angular.module('otherTongue');

app.controller('headerCtrl', function ($scope, NavService) {
    $scope.NavService = NavService;

});


'use strict';

var app = angular.module('otherTongue');

app.service('NavService', function () {
    var that = this;

    that.menuVisible = false;

    that.screens = [
        {name: 'Home', icon: 'home'},
        {name: 'Favourites', icon: 'star'},
        {name: 'train', icon: 'star'},
        {name: 'groups', icon: 'star'}
    ];
    that.screenIndex = 0;

    that.setScreen = function (index) {
        $('[screen="' + that.screens[that.screenIndex].name + '"]').velocity("transition.fadeOut", {duration: 400});
        that.screenIndex = index;
        $('[screen="' + that.screens[that.screenIndex].name + '"]').velocity("transition.fadeIn", {duration: 400});
        that.menuVisible = false;
        that.animateMenu();
    };

    that.toggleMenu = function (flag) {
        if (flag != undefined) that.menuVisible = flag;
        else that.menuVisible = !that.menuVisible;
        that.animateMenu();
    };

    that.animateMenu = function () {
        if (that.menuVisible) {
            $('[screen="sidebar"] .sidebar').velocity("transition.slideLeftBigIn", {duration: 400});
            $('[screen="sidebar"] .sidebar .menu-item').velocity("transition.slideUpIn", {stagger: 250, drag: true});
            $('[screen="sidebar"] .overlay').velocity("transition.fadeIn");
        } else {
            $('[screen="sidebar"] .sidebar').velocity("transition.slideLeftBigOut");
            $('[screen="sidebar"] .overlay').velocity("transition.fadeOut");
        }
    };

    return that;

});


'use strict';

var app = angular.module('otherTongue');

app.directive('place', function ($compile, $rootScope) {

    return {
        restrict: 'AE',
        link: function (scope, elem, attrs) {
            var $screen = $("[screen='" + attrs.place + "']");
            console.log(attrs, $screen);
            $screen.insertBefore($(elem));
            $(elem).remove();
            $compile($screen)(scope);
        }
    };
});


'use strict';

var app = angular.module('otherTongue');

app.controller('sidebarCtrl', function ($scope, NavService) {
    $scope.NavService = NavService;


});


'use strict';

var app = angular.module('otherTongue');

app.controller('trainCtrl', function ($scope, DataService) {
    $scope.DataService = DataService;


});
