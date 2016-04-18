angular.module('components.tagList', [
    'ngMaterial'
]).directive('tagList', function () {
    return {
        templateUrl: 'app/components/tagList/tagList.html',
        scope: true,
        link: function ( $scope ) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };
        }
    };
});
