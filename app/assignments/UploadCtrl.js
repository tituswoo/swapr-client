/**
 * Created by Vaughan on 10/27/2014.
 */
angular.module('swapr').controller('UploadCtrl', function ($scope, $stateParams) {
    $scope.upload = {
        title: 'Lab 1 Video Upload',
        dueDate: '8/31/14',
        dueTime: '11:59 pm',
        status: 'Incomplete',
        type: 'video',
        id: $stateParams.id
    };

});