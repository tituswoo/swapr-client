/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Courses', ['$http', 'ajax', function ($http, ajax) {
    // @todo: implement caching at some point.
    return {
        getCourses: function () {
            return ajax.get('courses');
        },
        getCourse: function (id) {
            // it would be great if there was an endpoint for this...
            // the courses/:id does not actually exist on apiary atm.
            // @todo talk with Chris about this.
            return ajax.get('courses/' + id);
        },
        addCourse: function (course) {
            return ajax.post(CONSTANTS.BASE_URL + 'courses', course);
        }
    };
}]);