angular.module('components.bookmarkList', [
    'ngMaterial'
]).directive('bookmarkList', function () {
    return {
        templateUrl: 'app/components/bookmarkList/bookmarkList.html',
        scope: true,
        link: function ( $scope ) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };
        }
    };
});
