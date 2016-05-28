var app = angular.module('myApp', []);
app.controller('customersController', function($scope, $http){
	$http.get("http://www.w3schools.com/angular/customers.php")
		.success(function(response, status, headers, config){
			console.log(status);
			console.log(headers);
			console.log(config);

			$scope.names = response.records;
		})
		.error(function(data, status, headers, config) {
	    	console.log(status);
			console.log(headers);
			console.log(config);
  		});
});
