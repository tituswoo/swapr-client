angular.module('swapr').factory('Grades', ['$http', 'CONSTANTS', function ($http, CONSTANTS) {
    var getGrades = function () {
        return $http.get(CONSTANTS.BASE_URL + 'assignments');
    };

    var getGrade = function(id) {
        return $http.get(CONSTANTS.BASE_URL + 'assignments/' + id);
    };

    return {
        getGrades: getGrades,
        getGrade: getGrade
    };
}]);
