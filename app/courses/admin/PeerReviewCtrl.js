/**
 * Created by Vaughan on 3/9/2015.
 */

angular.module('swapr.admin').controller('PeerReviewCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.controllerTest = function(){
        alert("Peer review controller works!");
        console.log("Peer review controller works!");
    };
}]);