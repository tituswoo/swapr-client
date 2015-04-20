angular.module('swapr.admin').controller('VideoUploadCtrl', ['$scope', '$state', 'Assignments', function ($scope, $state, Assignments) {
    // @todo: get param id to load in the data for the assignment.
    $scope.assignment = $scope.$parent.assignment;

    console.log('assignment:');
    console.log($scope.assignment);

    $scope.dueDateControl = {
        format: 'MMMM dd, yyyy',
        dueDate: $scope.assignment.due_date,
        open: function () {
            $scope.opened = true;
        }
    };

    $scope.save = function () {
        $scope.assignment.due_date = new Date($scope.dueDateControl.dueDate).toISOString();
        Assignments.updateAssignment($scope.assignment).then(function () {
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

