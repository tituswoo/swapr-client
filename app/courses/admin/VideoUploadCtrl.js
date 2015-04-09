angular.module('swapr.admin').controller('VideoUploadCtrl', ['$scope', '$stateParams', function ($scope) {
    // @todo: get param id to load in the data for the assignment.
    $scope.curCourse = $scope.$parent.curCourse;

    console.log($scope.curCourse);
}]);
