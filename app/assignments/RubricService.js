/**
 * Created by Vaughan on 4/14/2015.
 */

angular.module('swapr').factory('Rubrics', ['$http', 'CONSTANTS', 'ajax', function ($http, CONSTANTS, ajax) {
    return {
        getRubrics: function (assignmentID) {
            return ajax.get('items', {
                assignment: assignmentID
            });
        },
        getRubric: function (id) {
            return ajax.get('items/' + id);
        }
    };
}]);