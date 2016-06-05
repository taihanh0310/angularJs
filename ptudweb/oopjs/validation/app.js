var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function($scope){
	$scope.submitForm = function(isVaild){
		if (isVaild) {
			alert('our form is success');
		}
	};
});