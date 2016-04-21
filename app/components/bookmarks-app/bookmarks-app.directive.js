angular.module('test-app.components.bookmarks-app', [
]).directive('bookmarksApp', function () {
    return {
        templateUrl: 'app/components/bookmarks-app/bookmarks-app.html',
        scope: {},
        controllerAs: 'ctrl',
        controller: 'BookmarksAppController',
        bindToController: true
    };
});
