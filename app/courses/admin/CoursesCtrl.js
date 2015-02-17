/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr.admin').controller('CoursesCtrl', ['$scope', 'Courses', function ($scope, Courses) {
    Courses.getCourses().success(function (courses) {
        $scope.courses = courses;
    });
}]);