angular.module('swapr').factory('Grades', ['$http', 'CONSTANTS', function ($http, CONSTANTS) {
    // @todo: work on apiary first. This doesn't return what is expected.
    return {
        getGrades: function () {
            return $http.get(CONSTANTS.BASE_URL + 'assignments');
        },
        getGrade: function(id) {
            return $http.get(CONSTANTS.BASE_URL + 'assignments/' + id);
        }
    };
}]);
