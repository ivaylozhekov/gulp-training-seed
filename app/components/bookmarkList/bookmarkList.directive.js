angular.module('components.bookmarkList', [
]).directive('bookmarkList', function () {
    return {
        templateUrl: 'app/components/bookmarkList/bookmarkList.html',
        scope: {
            items: "=",
            filter: "="
        },
        link: function ( $scope ) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };
        }
    };
});
