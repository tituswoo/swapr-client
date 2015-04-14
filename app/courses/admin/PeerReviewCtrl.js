/**
 * Created by Vaughan on 3/9/2015.
 */

angular.module('swapr.admin').controller('PeerReviewCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    if ($scope.$parent.curCourse){
        $scope.$parent.curCourse.type = 'Peer Review';
    }
    $scope.typeOptions = ['Peer Review', 'Calibration'];
    $scope.controllerTest = function(){
        alert("Peer review controller works!");
        console.log("Peer review controller works!");
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
    $scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
}]);