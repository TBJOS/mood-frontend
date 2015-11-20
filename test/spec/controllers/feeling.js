'use strict';

describe('Controller: FeelingCtrl', function () {

  // load the controller's module
  beforeEach(module('moodFrontendApp'));

  var FeelingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeelingCtrl = $controller('FeelingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FeelingCtrl.awesomeThings.length).toBe(3);
  });
});
