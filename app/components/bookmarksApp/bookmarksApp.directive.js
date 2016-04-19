angular.module('components.bookmarksApp', [
]).directive('bookmarksApp', function () {
    return {
        templateUrl: 'app/components/bookmarksApp/bookmarksApp.html',
        scope: true,
        controllerAs: 'ctrl',
        controller: "BookmarksAppController",
        bindToController: true,
        link: function ($scope) {

        }
    };
});
