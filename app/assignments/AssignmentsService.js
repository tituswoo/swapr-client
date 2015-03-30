/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Assignments', ['$http', 'CONSTANTS', 'ajax', function ($http, CONSTANTS, ajax) {
    return {
        getAssignments: function (courseId) {
            return ajax.get('getAssignments/' + courseId);
        },
        getAssignment: function (id) {
            return ajax.get('assignments/' + id);
        }
    };
}]);