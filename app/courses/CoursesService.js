/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr').factory('Courses', ['$http', 'ajax', '$q', 'Auth', function ($http, ajax, $q, Auth) {
    // @todo: implement caching at some point.

    //get username, password from modal
    Auth.login({username: 'root', password: 'root'});
    return {
        getCourses: function () {
            return ajax.get('courses');
        },
        getCourse: function (id) {
            return $q(function (resolve, reject) {
                ajax.get('courses/' + id).then(function (course) {
                    resolve(course);
                }).catch(function (e) {
                    reject(e);
                });
            });
        },
        // @todo: fix this later
        addCourse: function (course) {
            return ajax.post(CONSTANTS.BASE_URL + 'courses', course);
        }
    };
}]);