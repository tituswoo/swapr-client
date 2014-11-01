/**
 * Created by Titus on 9/26/2014.
 */

angular.module('swapr', ['ui.bootstrap', 'ui.router', 'youtube-embed']);

angular.module('swapr').controller('MainCtrl', function ($scope) {
    $scope.hello = 'hi there!';
    $scope.menuVisible = false;

    $scope.toggleMenu = function () {
        $scope.menuVisible = !$scope.menuVisible;
    };
});

angular.module('swapr').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('assignments', {
            url: '/assignments',
            templateUrl: 'templates/assignments.html',
            controller: 'AssignmentsCtrl'
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
        .state('peerreviews', {
            url: '/review',
            templateUrl: 'templates/peerReviewMenu.html',
            controller: 'PeerReviewCtrl'
        })
        .state('upload', {
            url: '/upload',
            templateUrl: 'templates/upload.html',
            controller: 'UploadCtrl'
        })
        .state('gradeVideo', {
            url: '/gradeVideo',
            templateUrl: 'templates/gradeVideo.html',
            controller: 'GradeVideoCtrl'
        })
});
