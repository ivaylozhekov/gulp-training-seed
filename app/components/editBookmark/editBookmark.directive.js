angular.module('components.editBookmark', [
    'ngMaterial'
]).directive('editBookmark', function () {
    return {
        templateUrl: 'app/components/editBookmark/editBookmark.html',
        scope: true,
        link: function ( $scope ) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };
        }
    };
});
