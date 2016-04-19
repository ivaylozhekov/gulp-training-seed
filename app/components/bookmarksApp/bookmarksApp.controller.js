angular.module('components.bookmarksApp').controller('BookmarksAppController', function ($scope) {
    initializeCurrentBookmark();
    function initializeCurrentBookmark(){
        $scope.currentBookmark = {};
    }

    $scope.filter = {
        tag: null
    };

    $scope.bookmarkList = [
        {
            name: 'jQuery1',
            id: 0,
            url: 'http://www.jquery.com',
            tags: "JavaScript, jQuery, Library"
        },
        {
            name: 'UnderscoreJS',
            id: 1,
            url: 'http://www.underscorejs.org',
            tags: "JavaScript, Library, Underscore"
        },
        {
            name: 'Backbone',
            id: 2,
            url: 'http://www.backbonejs.org',
            tags: "Backbone, JavaScript"
        }
    ];
    extractTagMaps();
    function extractTagMaps(){
        $scope.tagMap = $scope.bookmarkList.reduce(function (map, bookmark) {
            bookmark.tags.replace(/ /g,'').split(',').forEach(function (tag) {
                if (map[tag]) {
                    map[tag]++;
                } else {
                    map[tag] = 1;
                }
            });
            return map;
        }, {});
    }

    this.editBookmark = function (bookmark) {
        Object.keys(bookmark).forEach(function(key){
            $scope.currentBookmark[key] = bookmark[key]
        });

        $scope.currentBookmark = angular.copy(bookmark);
    }

    this.deleteBookmark = function (bookmark) {
        initializeCurrentBookmark();
        $scope.bookmarkList.splice($scope.bookmarkList.indexOf(bookmark), 1);
    }

    this.saveBookmark = function (bookmark) {
        initializeCurrentBookmark();
        if(bookmark.id){
            var editedBookmark = $scope.bookmarkList.filter(function(obj){
                return bookmark.id === obj.id;
            })[0];
            angular.extend(editedBookmark, bookmark);
        } else {
            // TODO: Replace with API call
            $scope.currentBookmark.id = $scope.bookmarkList.length;
            $scope.bookmarkList.push(bookmark);
        }
        extractTagMaps();
    };

    this.clearCurrentBookmark = function(){
        initializeCurrentBookmark();
    }
});
