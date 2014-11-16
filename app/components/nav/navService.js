'use strict';

var app = angular.module('otherTongue');

app.service('NavService', function () {
    var that = this;

    that.menuVisible = false;

    that.screens = [
        {name: 'Home', icon: 'home'},
        {name: 'Favourites', icon: 'star'},
        {name: 'Test', icon: 'star'}
    ];
    that.screenIndex = 0;

    that.toggleMenu = function (flag) {
        if (flag != undefined) that.menuVisible = flag;
        else that.menuVisible = !that.menuVisible;
        that.animateMenu();
    };

    that.animateMenu = function () {
        if (that.menuVisible) {
            $('[screen="sidebar"] .sidebar').velocity("transition.slideLeftBigIn", { duration: 400 });
            $('[screen="sidebar"] .sidebar .menu-item').velocity("transition.slideUpIn", { stagger: 250, drag: true });
            $('[screen="sidebar"] .overlay').velocity("transition.fadeIn");
        } else {
            $('[screen="sidebar"] .sidebar').velocity("transition.slideLeftBigOut");
            $('[screen="sidebar"] .overlay').velocity("transition.fadeOut");
        }
    };

    return that;

});
