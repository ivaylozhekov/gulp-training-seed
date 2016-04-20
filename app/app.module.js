angular.module('sofia-training', [
    'components.bookmarksApp',
    'components.editBookmark',
    'components.bookmarkList',
    'components.bookmarkItem',
    'components.tagMap',
    'components.tagItem',
    'package-version',
    'mongolab-factory',
    'ngRoute'
]).config(function ($routeProvider) {
    $routeProvider.when('/bookmarks/:tagFilter', {
        template: '<bookmarks-app></bookmarks-app>'
    }).when('/bookmarks', {
        template: '<bookmarks-app></bookmarks-app>'
    }).otherwise({redirectTo: '/bookmarks'});
})
    .config(function (mongolabFactoryProvider) {
    mongolabFactoryProvider.setConfigs({
        dataBase: 'bookmark_app',
        apiKey: 'OhOFdBA8xQXyRdCvEsPXZTn3_-pLoZyD'
    });
}).run(function ($location) {

});

//    .directive('sofiaTraining', function () {
//    return { templateUrl: 'app/app.module.html' };
// });

angular.module('sofiaTraining.templates', []);

try {
    angular.module('sofiaTraining-constant');
} catch (error) {
    angular.module('sofiaTraining-constant', []).constant('sofiaTrainingVersion', null);
}
