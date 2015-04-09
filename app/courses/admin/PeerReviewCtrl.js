/**
 * Created by Vaughan on 3/9/2015.
 */

angular.module('swapr.admin').controller('PeerReviewCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    if ($scope.$parent.curCourse){
        $scope.curCourse.type = 'Peer Review';
        console.log($scope.$parent.curCourse.description);
    }
    $scope.typeOptions = ['Peer Review', 'Calibration'];
    $scope.boolOptions = ['Yes', 'No'];
    $scope.controllerTest = function(){
        alert("Peer review controller works!");
        console.log("Peer review controller works!");
    };

}]);