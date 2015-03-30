/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr.admin').controller('CoursesCtrl', ['$scope', 'Courses', 'Auth', function ($scope, Courses, Auth) {
    Courses.getCourses().then(function (courses) {
        $scope.courses = courses;
    });
}]);