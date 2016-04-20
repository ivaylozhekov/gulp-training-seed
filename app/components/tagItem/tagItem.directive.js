angular.module('components.tagItem', [
]).directive('tagItem', function ($location) {
    return {
        templateUrl: 'app/components/tagItem/tagItem.html',
        scope: {
            name: '=',
            count: '='
        },
        link: function ( scope ) {
            scope.filter = function(){
                $location.path('bookmarks/' + scope.name);
            }
        }
    };
});
