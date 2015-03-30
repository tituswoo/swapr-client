/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Assignments', ['$http', 'CONSTANTS', 'ajax', function ($http, CONSTANTS, ajax) {
    return {
        getAssignments: function () {
            // @todo: cannot get assignments for a specific course. Currently all assignments for all courses are returned. Course0 is the only course atm so it works for now.
            //return ajax.get('assignments/' + courseId);
            return ajax.get('assignments');
        },
        getAssignment: function (id) {
            // @todo: this returns the assignments with the provided id, assuming id is unique across ALL courses.
            return ajax.get('assignments/' + id);
        }
    };
}]);