(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    angular.$inject = ['$scope'];

    function HomeController($scope) {
        var vm = this;

        vm.greeting = "Hello dude!  Welcome to the wide world of code!";

    };

})();
