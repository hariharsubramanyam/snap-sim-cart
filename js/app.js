angular.module("snapSim", [])
  .controller("appController", function($scope) {
    // Set up some constants.
    var DATA_URL = "data/story_cart.json";
    var BUDGET = 10.00;

    // Make scope accessible globally for console debugging.
    window.$s = $scope;

    // Set the current page.
    $scope.pageNumber = 2;

    // Increment the page.
    $scope.advancePage = function() {
      $scope.pageNumber++;
      $scope.$apply();
    };

    // Get data.
    $.getJSON(DATA_URL, function(data) {
      $scope.story = data;
      console.log(data);
      $scope.$apply();
    });

    $scope.moneyLeft = BUDGET;

  });
