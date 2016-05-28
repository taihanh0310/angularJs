var mainApp = angular.module("mainApp", []);
	
mainApp.controller('personController', function($scope){
	$scope.firstname = "Hanh"; 
	$scope.lastname = "Nguyen Tai";
	$scope.fullname = function(){
		return $scope.firstname + " " + $scope.lastname;
	}
});

mainApp.controller('costController', function($scope){
	$scope.quantity = 1;
	$scope.price = 9.99;
});

mainApp.controller('nameController', function ($scope) {
    $scope.names = [
                    { name: 'hanh', country: 'viet nam' },
                    { name: 'thuy', country: 'han quoc' },
                    { name: 'chua biet', country: 'tinh te' },
                    { name: 'chua biasasaset', country: 'trong ko' },
                    { name: 'chsua biasasaset', country: 'Anh' },
                    { name: 'chussa biasasaset', country: 'My' }  ,
                    { name: 'chua bssiasasaset', country: 'Phap' }  ,
                    { name: 'csshua biasasaset', country: 'Nga' }   ,
                    ];
});