/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Courses', ['$http', 'CONSTANTS', function ($http, CONSTANTS) {
    // @todo: implement caching at some point.
    return {
        getCourses: function () {
            return $http.get(CONSTANTS.BASE_URL + 'courses');
        },
        getCourse: function (id) {
            // it would be great if there was an endpoint for this...
            // the courses/:id does not actually exist on apiary atm.
            // @todo talk with Chris about this.
            return $http.get(CONSTANTS.BASE_URL + 'courses/' + id);
        },
        addCourse: function (course) {
            return $http.post(CONSTANTS.BASE_URL + 'courses', course);
        }
    };
}]);