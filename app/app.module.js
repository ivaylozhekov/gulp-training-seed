angular.module('sofia-training', [
    'components.bookmarksApp',
    'components.editBookmark',
    'components.bookmarkList',
    'components.bookmarkItem',
    'components.tagList',
    'components.tagItem',
    'package-version'
]).run(function ( $log, $rootScope ) {
    $rootScope.field1 = 'root';
}).directive('sofiaTraining', function () {
    return { templateUrl: 'app/app.module.html' };
});

angular.module('gdanskTraining.templates', []);

try {
    angular.module('gdanskTraining-constant');
} catch ( error ) {
    angular.module('gdanskTraining-constant', []).constant('sofiaTrainingVersion', null);
}
