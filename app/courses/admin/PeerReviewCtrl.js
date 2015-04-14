/**
 * Created by Vaughan on 3/9/2015.
 */

angular.module('swapr.admin').controller('PeerReviewCtrl', ['$scope', '$stateParams', 'Rubrics', function ($scope, $stateParams, Rubrics) {
    Rubrics.getRubrics($scope.$parent.assignment.id).then(function (rubricItems) {
        //$scope.assignments = assignments;
        $scope.rubric = rubricItems;
        console.log(rubricItems);
    });

    $scope.typeOptions = ['Peer Review', 'Calibration'];

    //http://104.236.10.197/items/?assignment=2 (or assignment number)
    $scope.rubric = [
        {label: "Organizational Structure", remove:false, feedback: true},
        {label: "Content Models", remove:true, feedback: false},
        {label: "Content Prediction Discussion", remove:false, feedback: false},
        {label: "Content Overall", remove:true, feedback: true},
        {label: "Production Deilvery", remove:false, feedback: true}
    ];

    $scope.save = function() {
        $scope.$parent.assignment.rubric = $scope.rubric;
        //TODO: How does Chris want this formatted?
        $scope.$parent.assignment.due_date = $scope.dt;
        console.log($scope.$parent.assignment);
    };

    //Calendar functions
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

    //Note: These are the datepicker's formats, NOT moment compliant
    $scope.format = 'MM/dd/yyyy';
}]);
