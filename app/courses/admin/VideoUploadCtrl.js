angular.module('swapr.admin').controller('VideoUploadCtrl', ['$scope', '$state', function ($scope, $state) {
    // @todo: get param id to load in the data for the assignment.
    $scope.curCourse = $scope.$parent.curCourse;

    console.log($scope.curCourse);

    $scope.cancel = function () {
        var confirmed = confirm('Are you sure? All changes will be lost.');
        if (confirmed) {
            $state.go('courses.courses');
        }
    };
}]);
