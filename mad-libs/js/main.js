// Create application
var myApp = angular.module('myApp', [])

// Bind controller madCtrl
myApp.controller('madCtrl', function($scope) {
    $scope.name = 'name' 
    $scope.age = 'age'
    $scope.location = 'location'
    $scope.food = 'food'
})

	// Set initial values for name, age, location, and food

