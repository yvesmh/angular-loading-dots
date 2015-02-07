'use strict';

describe('Directive: angular-loading-dots', function() {

  beforeEach(module('angularLoadingDots'));

  var element;
  var scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should append at least 1 dot after 300 miliseconds', function(done) {
    inject(function($compile) {
        element = angular.element('<span loading-dots is-loading="true"></span>');
        element = $compile(element)(scope);

        expect(element.text()).toBeFalsy();
        setTimeout(function() {
          expect(element.text()).toBeTruthy();
          done();
        }, 400);

      });
  });
});
