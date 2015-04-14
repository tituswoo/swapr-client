/**
 * Created by Vaughan on 3/9/2015.
 */

angular.module('swapr.admin').controller('PeerReviewCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    if ($scope.$parent.curCourse){
        $scope.$parent.curCourse.type = 'Peer Review';
    }
    $scope.typeOptions = ['Peer Review', 'Calibration'];

    $scope.rubric = [
        {label: "Organizational Structure", remove:false, feedback: true},
        {label: "Content Models", remove:true, feedback: false},
        {label: "Content Prediction Discussion", remove:false, feedback: false},
        {label: "Content Overall", remove:true, feedback: true},
        {label: "Production Deilvery", remove:false, feedback: true}
    ];

    $scope.save = function() {
        $scope.$parent.curCourse.rubric = $scope.rubric;
        //TODO: How does Chris want this formatted?
        $scope.$parent.curCourse.due_date = $scope.dt;
        console.log($scope.$parent.curCourse);
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