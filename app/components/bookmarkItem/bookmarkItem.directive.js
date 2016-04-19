angular.module('components.bookmarkItem', [
]).directive('bookmarkItem', function () {
    return {
        require:'^bookmarksApp',
        templateUrl: 'app/components/bookmarkItem/bookmarkItem.html',
        scope: {
            bookmark: '='
        },
        link: function ( scope, element, attr, bookmarkAppCtrl) {
            scope.edit = function(){
                bookmarkAppCtrl.editBookmark(scope.bookmark);
            };

            scope.delete = function(){
                bookmarkAppCtrl.deleteBookmark(scope.bookmark);
            };
        }
    };
});
