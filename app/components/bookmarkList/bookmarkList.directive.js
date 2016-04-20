angular.module('components.bookmarkList', [
]).directive('bookmarkList', function ($routeParams) {
    return {
        templateUrl: 'app/components/bookmarkList/bookmarkList.html',
        scope: {
            items: "=",
            filter: "="
        },
        link: function ( $scope ) {
            $scope.filter = {
                tag: $routeParams.tagFilter
            };
            $scope.clearFilter = function () {
                $scope.filter.tag= null;
                $location.path('bookmarks/');
            };
        }
    };
});
