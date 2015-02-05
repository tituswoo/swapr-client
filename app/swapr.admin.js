/**
 * Created by tituswoo on 2/5/15.
 */

angular.module('swapr.admin', ['swapr', 'ui.bootstrap', 'ui.router', 'LocalStorageModule']);

angular.module('swapr.admin').config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('swapr.admin');
}]);

angular.module('swapr.admin').controller('MainCtrl', ['$scope', function($scope) {
    $scope.hello = "this is another hello message";
}]);

angular.module('swapr.admin').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/admin/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('grades', {
            abstract: true,
            template: '<ui-view />',
            url: '/grades'
        })
        .state('grades.grades', {
            url: '',
            templateUrl: 'templates/grades.html',
            controller: 'GradesCtrl'
        })
        .state('grades.detail', {
            url: '/detail/:id',
            templateUrl: 'templates/grades.detail.html',
            controller: 'GradesDetailsCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
        })
        .state('assignments', {
            abstract: true,
            template: '<ui-view />',
            url: '/assignments'
        })
        .state('assignments.assignments', {
            url: '',
            templateUrl: 'templates/assignments.html',
            controller: 'AssignmentsCtrl'
        })
        .state('assignments.upload', {
            url: '/upload',
            templateUrl: 'templates/upload.html',
            controller: 'UploadCtrl'
        })
        .state('assignments.peerreviews', {
            url: '/review',
            templateUrl: 'templates/peerReviewMenu.html',
            controller: 'PeerReviewCtrl'
        })
        .state('assignments.gradeVideo', {
            url: '/gradeVideo',
            templateUrl: 'templates/gradeVideo.html',
            controller: 'GradeVideoCtrl'
        })
}]);
