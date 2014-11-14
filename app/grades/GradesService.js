angular.module('swapr').factory('Grades', function ($http, CONSTANTS) {
    var getGrades = function () {
        return $http.get(CONSTANTS.BASE_URL + 'grades');
    };

    var getGrade = function(id) {
        return $http.get(CONSTANTS.BASE_URL + 'grades/' + id);
    };

    return {
        getGrades: getGrades,
        getGrade: getGrade
    };
});
