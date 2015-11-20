'use strict';

describe('Controller: ExitCtrl', function () {

  // load the controller's module
  beforeEach(module('moodFrontendApp'));

  var ExitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExitCtrl = $controller('ExitCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExitCtrl.awesomeThings.length).toBe(3);
  });
});
