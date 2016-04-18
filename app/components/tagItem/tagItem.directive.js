angular.module('components.tagItem', [
    'ngMaterial'
]).directive('tagItem', function () {
    return {
        templateUrl: 'app/components/tagItem/tagItem.html',
        scope: {
            name: '=',
            count: '='
        },
        link: function ( $scope ) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };
        }
    };
});
