/**
 * Created by Vaughan on 3/9/2015.
 */

angular.module('swapr.admin').controller('PeerReviewCtrl', ['$scope', '$stateParams', 'Rubrics', 'Assignments', function ($scope, $stateParams, Rubrics, Assignments) {
    $scope.assignment = $scope.$parent.assignment;
    console.log($scope.assignment);
    Rubrics.getRubrics($scope.assignment.id).then(function (rubricItems) {
        //$scope.assignments = assignments;
        $scope.rubric = rubricItems;
        console.log(rubricItems);
    });

    $scope.typeOptions = ['Peer Review', 'Calibration'];

    //http://104.236.10.197/items/?assignment=2 (or assignment number)
    /*
    $scope.rubric = [
        {label: "Organizational Structure", remove:false, feedback: true},
        {label: "Content Models", remove:true, feedback: false},
        {label: "Content Prediction Discussion", remove:false, feedback: false},
        {label: "Content Overall", remove:true, feedback: true},
        {label: "Production Deilvery", remove:false, feedback: true}
    ];
    */

    $scope.save = function () {
        $scope.assignment.rubric = $scope.rubric;
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

    $scope.dueDateControl = {
        format: 'MMMM dd, yyyy',
        dueDate: $scope.assignment.due_date || new Date().toISOString(),
        open: function () {
            $scope.opened = true;
        }
    };

    //Calendar functions
    /*
    $scope.today = function() {
        $scope.dt = moment().format($scope.format);
        console.log($scope.dt)
    };
    $scope.today();
    $scope.clear = function () {
        $scope.dt = null;
    };
    $scope.disabled = function(date, mode) {
        // Disable weekend selection
        //return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        return null
    };
    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    */
}]);
