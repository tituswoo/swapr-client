/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Courses', ['$http', 'ajax', '$q', function ($http, ajax, $q) {
    // @todo: implement caching at some point.
    return {
        getCourses: function () {
            return ajax.get('courses');
        },
        getCourse: function (id) {
            // it would be great if there was an endpoint for this...
            // the courses/:id does not actually exist on apiary atm.
            // @todo Doing a `courses/2` does not work. It still returns an array of courses. Right now use workaround.

            return $q(function (resolve, reject) {
                ajax.get('courses').then(function (courses) {
                    resolve(courses[id - 1]); // it's `id+1` because the course indices are all shifted. Again, this is just a temp workaround.
                }).catch(function (e) {
                    reject(e);
                });
            });
        },
        addCourse: function (course) {
            return ajax.post(CONSTANTS.BASE_URL + 'courses', course);
        }
    };
}]);