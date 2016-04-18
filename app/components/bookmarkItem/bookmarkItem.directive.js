angular.module('components.bookmarkItem', [
    'ngMaterial'
]).directive('bookmarkItem', function () {
    return {
        templateUrl: 'app/components/bookmarkItem/bookmarkItem.html',
        scope: {
            name: '=',
            url: '=',
            tags: '='
        },
        link: function ( $scope ) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };
        }
    };
});
