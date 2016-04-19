angular.module('components.tagMap', [
]).directive('tagMap', function () {
    return {
        templateUrl: 'app/components/tagMap/tagMap.html',
        scope: {
            map: '='
        },
        link: function ( scope, element, attrs ) {
            scope.$watch('map', function(newValue, oldValue) {
                if (newValue){
                    scope.items = Object.keys(scope.map).reduce(function(list, key){
                        list.push({name: key, count: scope.map[key]});
                        return list;
                    },[]);
                }
            });
        }
    };
});
