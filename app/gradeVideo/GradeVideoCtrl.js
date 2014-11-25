/**
 * Created by tituswoo on 10/31/14.
 */

angular.module('swapr').controller('GradeVideoCtrl', function ($scope) {
    $scope.peerReview = {
        video: {
            url: "https://www.youtube.com/watch?v=0Bmhjf0rKe8",
            title: "Surprised Kitty"
        },
        criteria: [
            {
                title: 'Organizational Structure',
                rating: {
                    rate: 0,
                    max: 5,
                    readonly: false
                },
                feedback: 'enter feedback here.'
            },
            {
                title: 'Content Models',
                rating: {
                    rate: 0,
                    max: 5,
                    readonly: false
                },
                feedback: 'enter feedback here.'
            },
            {
                title: 'Content Prediction Discussion',
                rating: {
                    rate: 0,
                    max: 5,
                    readonly: false
                },
                feedback: 'enter feedback here.'
            },
            {
                title: 'Content Overall',
                rating: {
                    rate: 0,
                    max: 5,
                    readonly: false
                },
                feedback: 'enter feedback here.'
            },
            {
                title: 'Production Delivery',
                rating: {
                    rate: 0,
                    max: 5,
                    readonly: false
                },
                feedback: 'enter feedback here.'
            }
        ]
    };
});
