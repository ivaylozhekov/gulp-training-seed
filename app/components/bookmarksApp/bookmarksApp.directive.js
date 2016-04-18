angular.module('components.bookmarksApp', [
    'ngMaterial'
]).directive('bookmarksApp', function () {
    return {
        templateUrl: 'app/components/bookmarksApp/bookmarksApp.html',
        scope: true,
        link: function ($scope) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };

            $scope.filter = {
                tag: null
            }

            $scope.bookmarkList = [
                {
                    name: 'jQuery1',
                    url: 'http://www.jquery.com',
                    tags: "JavaScript, jQuery, Library"
                },
                {
                    name: 'UnderscoreJS',
                    url: 'http://www.underscorejs.org',
                    tags: "JavaScript, Library, Underscore"
                },
                {
                    name: 'Backbone',
                    url: 'http://www.backbonejs.org',
                    tags: "Backbone, JavaScript"
                }
            ]
            // TODO: Change this logic to take bookmarks from the list above
            $scope.tagList = [
                {
                    name: 'Backbone',
                    count: 1
                },
                {
                    name: 'JavaScript',
                    count: 3
                },
                {
                    name: 'jQuery',
                    count: 1
                },
                {
                    name: 'Library',
                    count: 3
                },
                {
                    name: 'Underscore',
                    count: 1
                }
            ]
        }
    };
});
