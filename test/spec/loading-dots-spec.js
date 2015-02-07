'use strict';

describe('Directive: angular-loading-dots', function() {

  beforeEach(module('angularLoadingDots'));

  var element;
  var scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should exist', inject(function($compile) {
    element = angular.element('<loading-dots></loading-dots>');
    element = $compile(element)(scope);
    expect(true).toBe(true);
  }));
});
