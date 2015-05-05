/**
 * Created by Vaughan on 10/27/2014.
 */
angular.module('swapr').controller('UploadCtrl',['$scope', '$stateParams', '$http', 'YoutubeValidation', function ($scope, $stateParams, $http, YoutubeValidation) {
    $scope.assignment = $scope.$parent.$parent.assignment;

    $scope.inputUrl = "";
    $scope.videoUrl = "";
    $scope.urlIsValid = true;

    $scope.checkUrl = function () {
        YoutubeValidation.checkUrl($scope.inputUrl, function (urlIsValid, urlIsUploading) {
            $scope.urlIsValid = urlIsValid;
            $scope.urlIsUploading = urlIsUploading;
            if (urlIsValid) {
                $scope.videoUrl = $scope.inputUrl;
            }
        })
    };
}]);