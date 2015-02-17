/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr.admin').controller('CourseCtrl', ['$scope', '$stateParams', 'Courses', function ($scope, $stateParams, Courses) {
    Courses.getCourse($stateParams.id).success(function (course) {
        $scope.course = course;
    });
}]);