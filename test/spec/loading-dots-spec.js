'use strict';

describe('Directive: angular-loading-dots', function() {

  beforeEach(module('angularLoadingDots'));

  var element;
  var scope;
  var $interval;

  beforeEach(inject(function($rootScope, _$interval_) {
    scope = $rootScope.$new();
    $interval = _$interval_;
  }));

  describe('Default settings', function() {

    beforeEach(inject(function($compile) {
      element = angular.element('<span loading-dots is-loading="true"></span>');
      element = $compile(element)(scope);
      scope.$digest();

    }));

    it('Should not have any text when first loaded', function() {
      expect(element.text()).toEqual('');
    });

    it('Should append 1 dot after 300 miliseconds', function() {
      $interval.flush(301);
      expect(element.text()).toEqual('.');
    });

    it('Should append 5 dots after 1500 miliseconds', function() {
      $interval.flush(1501);
      expect(element.text()).toEqual('.....');
    });

    it('Should empty the text after 1800 miliseconds', function() {
      $interval.flush(1801);
      expect(element.text()).toEqual('');
    });

  });

  describe('Using minimum dot count', function() {

    it('Should prevent negative values and default to 0 if a negative value is passed', function() {
      inject(function($compile) {
        element = angular.element('<span loading-dots is-loading="true" min-dots="-1"></span>');
        element = $compile(element)(scope);
        scope.$digest();
        expect(element.text()).toEqual('');
      });
    });

    it('Should append 2 dots if configured to have a minimum of 2 dots', function() {
      inject(function($compile) {
        element = angular.element('<span loading-dots is-loading="true" min-dots="2"></span>');
        element = $compile(element)(scope);
        scope.$digest();

        expect(element.text()).toEqual('..');

        $interval.flush(301);
        //initial 2 dots + 1 dot
        expect(element.text()).toEqual('...');

      });

    });

  });

  describe('Using maximum dot count', function() {
    it('Should should prevent negative values and default to 1 if a negative value is passed', function() {
      inject(function($compile) {
        element = angular.element('<span loading-dots is-loading="true" max-dots="-1"></span>');
        element = $compile(element)(scope);
        scope.$digest();

        $interval.flush(301);
        expect(element.text()).toEqual('.');

      });

    });

    it('Should reset the text after 3 dots if configured to have a maximum of 3 dots', function() {
      inject(function($compile) {
        element = angular.element('<span loading-dots is-loading="true" max-dots="3"></span>');
        element = $compile(element)(scope);
        scope.$digest();

        $interval.flush(1201);
        expect(element.text()).toEqual('');

      });
    });

  });

  describe('Combining min and max dot count', function() {

    it('Should adjust the max dot count to min-dots+1 if the minimum dot count is higher than the maximum', function() {
      inject(function($compile) {
        element = angular.element('<span loading-dots is-loading="true" min-dots="10" max-dots="5"></span>');
        element = $compile(element)(scope);

        scope.$digest();
        expect(element.text()).toEqual('..........'); // 10 dots
        $interval.flush(301);
        expect(element.text()).toEqual('...........'); //11 dots
        $interval.flush(301);
        expect(element.text()).toEqual('..........'); // 10 dots

      });
    });

  });

  describe('Using increments', function() {

    beforeEach(inject(function($compile) {
      element = angular.element('<span loading-dots is-loading="true" max-dots="9" increment="3" ></span>');
      element = $compile(element)(scope);
      scope.$digest();

    }));

    it('Should increment the number of dots by the amount configured', function() {

      $interval.flush(301);
      expect(element.text()).toEqual('...');
      $interval.flush(301);
      expect(element.text()).toEqual('......');
      $interval.flush(301);
      expect(element.text()).toEqual('.........');
      $interval.flush(301);
      expect(element.text()).toEqual('');

    });

  });

  describe('Using intervals', function() {
    beforeEach(inject(function($compile) {
      element = angular.element('<span loading-dots is-loading="true" interval="500"></span>');
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it('Should increment the number of dots in the interval configured', function() {
      $interval.flush(301);
      expect(element.text()).not.toEqual('.');
      //let 200 more miliseconds for the first increment
      $interval.flush(200);
      expect(element.text()).toEqual('.');

      $interval.flush(501);
      expect(element.text()).toEqual('..');

    });
  });

  describe('Using other characters', function() {
    beforeEach(inject(function($compile) {
      element = angular.element('<span loading-dots is-loading="true" character="!"></span>');
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it('Should allow for configuring which character to display', function() {

      $interval.flush(301);
      expect(element.text()).toEqual('!');

    });

  });

  describe('Listening for changes to the is-loading attribute', function() {

    beforeEach(inject(function($compile) {
      element = angular.element('<span loading-dots is-loading="isLoading"></span>');
      scope.isLoading = true;
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it('Should stop loading when the is-loading attribute is set to false', function() {

      //let it run at least 1 interval to make sure that it was running before stopping it
      $interval.flush(301);
      expect(element.text()).toEqual('.');

      scope.isLoading = false;
      scope.$digest();
      //make sure that stopping it cleared text
      expect(element.text()).toEqual('');

    });

    it('Should start loading when the is-loading attribute is set to true', function() {

      //pause it first
      scope.isLoading = false;
      scope.$digest();
      expect(element.text()).toEqual('');

      scope.isLoading = true;
      scope.$digest();
      $interval.flush(301);
      expect(element.text()).toEqual('.');

    });

  });

});
