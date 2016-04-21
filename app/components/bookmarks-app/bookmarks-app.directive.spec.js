describe('test-app.components.bookmarks-app', function () {
    beforeEach(module('mongolab-factory'));
    beforeEach(module('test-app.components.bookmarks-app', function ($provide) {
        var object = [{
            "_id": {"$oid": "5717289de4b0d460bfa345a6"},
            "name": "jQuery1",
            "url": "http://www.jquery.com",
            "tags": "JavaScript, jQuery, Library"
        }, {
            "_id": {"$oid": "5717289de4b0d460bfa345a7"},
            "name": "UnderscoreJS",
            "url": "http://www.underscorejs.org",
            "tags": "JavaScript, Library, Underscore"
        }, {
            "_id": {"$oid": "5717289de4b0d460bfa345a8"},
            "name": "Backbone",
            "url": "http://www.backbonejs.org",
            "tags": "Backbone, JavaScript"
        }, {
            "_id": {"$oid": "57179670e4b07036dddc1928"},
            "url": "http://reactjs.com",
            "name": "ReactJS",
            "tags": "JavaScript,Library, ReactJS"
        }, {
            "_id": {"$oid": "57179dc3e4b07036dddc75cf"},
            "url": "http://www.lowdash.com",
            "name": "Lowdash",
            "tags": "Lowdash, JavaScript"
        }];
        $provide.factory('mongolabFactory', function () {
            return {
                'get': function () {
                    return object;
                },
                'update': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(object);
                    return {
                        $promise: fakePromise.promise
                    };
                },
                'query': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(object);
                    return {
                        $promise: fakePromise.promise
                    };
                }
            }
        })
    }));
    var directive;
    var $q;
    beforeEach(inject(function ($compile, $rootScope, directiveBuilder, _$httpBackend_,  _$q_) {
        $q =  _$q_;
        directive = directiveBuilder.$build('<bookmarks-app></bookmarks-app>');
    }));

    it('should check if tagMap is populated', function () {
        var scope = directive.element.isolateScope();
        expect(scope.tagMap).toEqual({
            "Backbone": 1,
            "JavaScript": 5,
            "Library": 3,
            "Lowdash": 1,
            "ReactJS": 1,
            "Underscore": 1,
            "jQuery": 1
        });
    });

    it('should select bookmark for editing', function () {
        var scope = directive.element.isolateScope();
        //scope.ctrl.editBookmark.resolve();
        scope.ctrl.editBookmark(scope.bookmarkList[0]);
        expect(scope.currentBookmark).toEqual({
            "_id": {"$oid": "5717289de4b0d460bfa345a6"},
            "name": "jQuery1",
            "url": "http://www.jquery.com",
            "tags": "JavaScript, jQuery, Library"
        });
    });

    it('should select bookmark for editing', function () {
        var scope = directive.element.isolateScope();
        scope.ctrl.editBookmark(scope.bookmarkList[0]);
        expect(scope.currentBookmark).toEqual({
            "_id": {"$oid": "5717289de4b0d460bfa345a6"},
            "name": "jQuery1",
            "url": "http://www.jquery.com",
            "tags": "JavaScript, jQuery, Library"
        });
    });

    it('should clear selected bookmark', function () {
        var scope = directive.element.isolateScope();
        scope.ctrl.clearCurrentBookmark();
        expect(scope.currentBookmark).toEqual({});
    });


    it('should create element and it should not be empty', function () {
        expect(directive.element.html()).toBeTruthy();
    });

    it('should update bookmark', function () {
        var scope = directive.element.isolateScope();
        scope.ctrl.editBookmark(scope.bookmarkList[2]);
        expect(scope.currentBookmark).toEqual({
            "_id": {"$oid": "5717289de4b0d460bfa345a8"},
            "name": "Backbone",
            "url": "http://www.backbonejs.org",
            "tags": "Backbone, JavaScript"
        });
        scope.currentBookmark = {
            "_id": {"$oid": "5717289de4b0d460bfa345a8"},
            "name": "Backbone",
            "url": "http://www.backbonejs.org",
            "tags": "Backbone, JavaScript, TestChange1, TestChange2"
        };
        var promise = scope.ctrl.saveBookmark(scope.currentBookmark);
        promise.then(function(){
            expect(scope.bookmarkList[2]).toEqual({
                "_id": {"$oid": "5717289de4b0d460bfa345a8"},
                "name": "Backbone",
                "url": "http://www.backbonejs.org",
                "tags": "Backbone, JavaScript, TestChange1, TestChange2"
            });
            dump(" adfadsfadfasdfads" + scope.tagMap.TestChange1);
        });


        // expect(scope.tagMap.TestChange1).toEqual(1);
        // expect(scope.tagMap.TestChange2).toEqual(1);
    });


});
