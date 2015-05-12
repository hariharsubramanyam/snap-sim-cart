angular.module("snapSim", [])
  .controller("appController", function($scope) {
    // Set up some constants.
    var DATA_URL = "data/story_cart.json";
    var BUDGET = 86.50;

    // Make scope accessible globally for console debugging.
    window.$s = $scope;

    // Set the current page.
    $scope.pageNumber = 1;

    // Increment the page.
    $scope.advancePage = function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $scope.pageNumber++;
    };

    $scope.budget = BUDGET;
    $scope.used = BUDGET;

    // Get data.
    $.getJSON(DATA_URL, function(data) {
      $scope.story = data;
      var used = 0;
      data.items.forEach(function(item) {
        item.selected = true;
        used += item.price;
      });
      $scope.used = round(used);
    });
    
    var round = function(x) {
      return Math.round(x * 100.0) / 100.0;
    };

    $scope.itemSelected = function(item) {
      item.selected = !item.selected;
      var multiplier = -1;
      if (item.selected) {
        multiplier = 1;
      }
      $scope.used += multiplier * item.price;
      $scope.used = round($scope.used);
    };
  });
