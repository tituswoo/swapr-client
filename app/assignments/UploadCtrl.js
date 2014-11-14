/**
 * Created by Vaughan on 10/27/2014.
 */
angular.module('swapr').controller('UploadCtrl', function ($scope, $stateParams, $http) {
    $scope.upload = {
        title: 'Lab 1 Video Upload',
        dueDate: '8/31/14',
        dueTime: '11:59 pm',
        status: 'Incomplete',
        type: 'video',
        id: $stateParams.id
    };

    $scope.inputUrl = "";
    $scope.videoUrl = "";
    $scope.urlIsValid=true;

    $scope.checkUrl = function() {
        var inputUrlId = "";
        //TODO: urls must currently be prefaced with "http://"
        if ($scope.inputUrl.match(/youtube\.com\/watch\?v=([^\&\?\/]{11})/)) {
            var index = $scope.inputUrl.indexOf("watch?v=") + 8;
            inputUrlId = $scope.inputUrl.substring(index);
        } else if ($scope.inputUrl.match(/youtube\.com\/embed\/([^\&\?\/]{11})/)) {
            var index = $scope.inputUrl.indexOf("embed") + 6;
            inputUrlId = $scope.inputUrl.substring(index);
        } else if($scope.inputUrl.match(/youtu\.be\/([^\&\?\/]{11})/)){
            var index = $scope.inputUrl.indexOf(".be") + 4;
            inputUrlId = $scope.inputUrl.substring(index);
        } else if($scope.inputUrl.match(/youtube\.com\/v\/([^\&\?\/]{11})/)){
            console.log("youtube.com/v/")
            var index = $scope.inputUrl.indexOf("/v/") + 3;
            inputUrlId = $scope.inputUrl.substring(index);
            console.log(inputUrlId);
        }
        $http.get('https://www.googleapis.com/youtube/v3/videos?id='+inputUrlId
            +"&key=AIzaSyAaTtiCEM1194GMdnfNvA-aWFtaNTf_9UY&part=status").
            success(function(data, status, headers, config) {
                if(data.items.length < 1) {
                    $scope.urlIsValid=false;
                    return;
                } else if (data.items[0].status.privacyStatus == "public"
                    || data.items[0].status.privacyStatus == "unlisted") {
                    $scope.videoUrl = $scope.inputUrl;
                    $scope.urlIsValid=true;
                }
            }).
            error(function(data, status, headers, config) {
                console.log("Error loading video url");
            });
    };
    //$scope.videoUrl = "https://www.youtube.com/watch?v=0Bmhjf0rKe8";

    $scope.intro = "Upload yer video here, matey! Arrgh...";
});