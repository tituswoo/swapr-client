angular.module('swapr.admin').controller('VideoUploadCtrl', ['$scope', '$state', 'Assignments', function ($scope, $state, Assignments) {
    // @todo: get param id to load in the data for the assignment.
    $scope.currAssignment = $scope.$parent.curCourse;

    console.log($scope.curCourse);

    $scope.dueDateControl = {
        format: 'MMMM dd, yyyy',
        dueDate: $scope.currAssignment.due_date,
        open: function () {
            $scope.opened = true;
        }
    };

    $scope.save = function () {
        $scope.currAssignment.due_date = $scope.dueDateControl.dueDate.toISOString();
        Assignments.updateAssignment($scope.currAssignment).then(function () {
            alert('assignment saved successfully.');
        }).catch(function (e) {
            alert('Error saving the assignment: ' + e);
        });
    };

    $scope.cancel = function (e) {
        e.preventDefault();
        var confirmed = confirm('Are you sure? All changes will be lost.');
        if (confirmed) {
            $state.reload();
        }
    };
}]);

