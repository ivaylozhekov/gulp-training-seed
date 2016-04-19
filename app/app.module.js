angular.module('sofia-training', [
    'components.bookmarksApp',
    'components.editBookmark',
    'components.bookmarkList',
    'components.bookmarkItem',
    'components.tagMap',
    'components.tagItem',
    'package-version'
]).run(function () {

}).directive('sofiaTraining', function () {
    return { templateUrl: 'app/app.module.html' };
});

angular.module('sofiaTraining.templates', []);

try {
    angular.module('sofiaTraining-constant');
} catch ( error ) {
    angular.module('sofiaTraining-constant', []).constant('sofiaTrainingVersion', null);
}
