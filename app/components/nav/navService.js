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
