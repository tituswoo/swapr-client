/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Assignments', ['$http', 'CONSTANTS', 'ajax', function ($http, CONSTANTS, ajax) {
    return {
        getAssignments: function (courseID) {
            return ajax.get('assignments', {
                course: courseID
            });
        },
        getAssignment: function (id) {
            // @todo: this returns the assignments with the provided id, assuming id is unique across ALL courses.
            return ajax.get('assignments/' + id);
        }
    };
}]);