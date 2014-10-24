/**
 * Created by Vaughan on 10/24/2014.
 */
angular.module('swapr').controller('AssignmentsCtrl', function ($scope, $stateParams) {
    $scope.assignments = [
        {
            title: 'Lab 1 Video Upload',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            id: $stateParams.id
        }
    ]
});