/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Assignments', ['$http', 'CONSTANTS', function ($http, CONSTANTS) {
    return {
        getAssignments: function (courseId) {
            return $http.get(CONSTANTS.BASE_URL + 'getAssignments/' + courseId);
        },
        getAssignment: function (id) {
            return $http.get(CONSTANTS.BASE_URL + 'assignments/' + id);
        }
    };
}]);