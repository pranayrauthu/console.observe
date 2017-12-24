require('./../console-observe.js');
var assert = require('assert');



describe('Observe test', function () {

    describe('set', function () {
        it('should observe set', function (done) {
            var testObj = {};
            var observableObj = console.observe(testObj, function (prop, value) {
                assert(prop === 'name', 'set failed');
                assert(value === 'test name', 'set failed');
                done();
            });
            observableObj.name = 'test name';
        });
    });

    describe('get', function () {
        it('should observe get', function (done) {
            var testObj = {};
            var observableObj = console.observe(testObj, function (prop, value) {
                assert(prop === 'name', 'get failed');
                assert(!value, 'get failed');
                done();
            });
            observableObj.name;
        });
    });
});