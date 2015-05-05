/**
 * Created by Vaughan on 10/24/2014.
 */
angular.module('swapr').controller('PeerReviewCtrl', ['$scope', '$stateParams', 'Rubrics', function ($scope, $stateParams, Rubrics) {
    $scope.assignment = $scope.$parent.$parent.assignment;

    Rubrics.getRubrics($scope.assignment.id).then(function (rubricItems) {
        //$scope.assignments = assignments;
        $scope.rubric = rubricItems;
        console.log(rubricItems);
    });


    $scope.reviewList = [
        {
            title: "Video 1",
            percentage: "50"
        },
        {
            title: "Video 2",
            percentage: "0"
        },
        {
            title: "Video 3",
            percentage: "0"
        }
    ];
}]);