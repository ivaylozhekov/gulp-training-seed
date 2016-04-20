angular.module('components.bookmarksApp').controller('BookmarksAppController', function ($scope, $rootScope, mongolabFactory, $location) {
    initializeCurrentBookmark();
    function initializeCurrentBookmark(){
        $scope.currentBookmark = {};
    }

    $scope.bookmarkList = mongolabFactory.query(extractTagMaps);

    function extractTagMaps(){
        $scope.tagMap = $scope.bookmarkList.reduce(function (map, bookmark) {
            bookmark.tags.split(',').forEach(function (tag) {
                var _tag = tag.trim();
                if(_tag.length>0){
                    if (map[_tag]) {
                        map[_tag]++;
                    } else {
                        map[_tag] = 1;
                    }
                }
            });
            return map;
        }, {});
    }

    this.editBookmark = function (bookmark) {
        $scope.currentBookmark = angular.copy(bookmark);
    };

    this.deleteBookmark = function (bookmark) {
        mongolabFactory.remove({id: bookmark._id.$oid}).$promise.then(function (resource) {
            $scope.bookmarkList.splice($scope.bookmarkList.indexOf(bookmark), 1);
            initializeCurrentBookmark();
            extractTagMaps();
        });
    };

    this.saveBookmark = function (bookmark) {
        initializeCurrentBookmark();
        if(bookmark._id !== undefined){
            mongolabFactory.update({id: bookmark._id.$oid}, bookmark).$promise.then(function (resource) {
                var editedBookmark = $scope.bookmarkList.filter(function (obj) {
                    return bookmark._id.$oid === obj._id.$oid;
                })[0];
                editedBookmark._id = resource._id;
                angular.extend(editedBookmark, bookmark);
                extractTagMaps();
            });
        } else {
            mongolabFactory.save(bookmark).$promise.then(function (resource) {
                bookmark._id = resource._id;
                $scope.bookmarkList.push(bookmark);
                extractTagMaps();
            });
        }
    };

    this.clearCurrentBookmark = function(){
        initializeCurrentBookmark();
    }
});
