/**
 * Created by Titus on 9/26/2014.
 */

angular.module('swapr', ['ui.bootstrap', 'ui.router']);
angular.module('swapr').controller('MainCtrl', function($scope){
    $scope.hello = 'hi there!';
});