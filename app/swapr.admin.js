/**
 * Created by tituswoo on 2/5/15.
 */

angular.module('swapr.admin', ['swapr', 'ui.bootstrap', 'ui.router', 'LocalStorageModule']);

angular.module('swapr.admin').config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('swapr.admin');
}]);

angular.module('swapr.admin').controller('MainCtrl', ['$scope', '$http', 'Auth', function($scope, $http, Auth) {
    Auth.login({
        username: 'root',
        password: 'root'
    }).then(function () {
        console.log('success');
    }).catch(function () {
        console.log('problem logging in');
    }).finally(function () {
        console.log(Auth.getToken());
    });
}]);

angular.module('swapr.admin').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/admin/home.html',
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
        .state('courses', {
            abstract: true,
            template: '<ui-view />',
            url: '/courses'
        })
        .state('courses.course', {
            url: '/course/:id',
            views: {
                '':{
                    templateUrl: 'templates/admin/course/course.html',
                    controller: 'CourseCtrl'
                },
                'tabView@courses.course':{
                    templateUrl: 'templates/admin/course/courseTabs.html'
                },
                'peerReview@courses.course': {
                    templateUrl:'templates/admin/course/peerReview.html',
                    controller: 'PeerReviewCtrl'
                }
            }
        })
        .state('courses.assignments', {
            url: '',
            templateUrl: 'templates/student/assignments.html',
            controller: 'AssignmentsCtrl'
        });
}]);
