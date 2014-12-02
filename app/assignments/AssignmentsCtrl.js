/**
 * Created by Vaughan on 10/24/2014.
 */
angular.module('swapr').controller('AssignmentsCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
    $scope.assignments = [
        {
            title: 'Lab 1 Video Upload',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'video',
            route: 'assignments.upload',
            id: $stateParams.id
        },
        {
            title: 'Lab 1 Peer Review',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'review',
            route: 'assignments.gradeVideo',
            id: $stateParams.id
        }
    ]
}]);