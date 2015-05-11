angular.module("snapSim", [])
  .controller("appController", function($scope) {
    // Set up some constants.
    var DATA_URL = "data/story_cart.json";

    // Make scope accessible globally for console debugging.
    window.$s = $scope;

    // Get data.
    $.getJSON(DATA_URL, function(data) {
      $scope.story = data;
      console.log(data);
      $scope.$apply();
    });

  });
