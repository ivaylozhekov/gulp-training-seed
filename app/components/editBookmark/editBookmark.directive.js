angular.module('components.editBookmark', [
]).directive('editBookmark', function () {
    return {
        require:'^bookmarksApp',
        templateUrl: 'app/components/editBookmark/editBookmark.html',
        scope: {
            bookmark  : '='
        },
        link: function ( scope, element, attr, bookmarkAppCtrl ) {
            scope.save = function(){
                bookmarkAppCtrl.saveBookmark(scope.bookmark);
            };

            scope.clear = function(){
                bookmarkAppCtrl.clearCurrentBookmark();
            };
        }
    };
});
