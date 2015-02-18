angular.module('swapr').controller('GradesCtrl', ['$scope', 'Grades', function($scope, Grades) {
    Grades.getGrades().success(function(grades) {
        $scope.grades = grades;
        console.log(grades);
    });
}]);
