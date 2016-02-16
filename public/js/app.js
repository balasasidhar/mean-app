var sasiApp = angular.module('sasiApp', ['ngRoute', 'ngCookies']);

sasiApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.jade',
            controller: 'mainController'
        })
        .when('/index', {
            templateUrl: 'tmpl/home.jade',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'tmpl/about.jade',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'tmpl/contacts.jade',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: "/"
        });
});

sasiApp.controller('mainController', function ($scope, $cookies) {
    $scope.message = 'Everyone come and see how good I look!';
    $cookies.put('test_cookie', 'Sasidhar');
    $scope.name = $cookies.get('test_cookie');
});

sasiApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

sasiApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

