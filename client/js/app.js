'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/children', {templateUrl: 'partials/children-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/children/:employeeId', {templateUrl: 'partials/child-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/children/:employeeId/pickups', {templateUrl: 'partials/pickup-list.html', controller: 'ReportListCtrl'});
    $routeProvider.when('/children/:employeeId/pickups/:employeeId', {templateUrl: 'partials/pickup-detail.html', controller: 'PickupDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/children'});
}]).run(function($rootScope, $location) {
        $rootScope.location = $location;
    });