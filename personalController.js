/**
*  Module
*
* Description
*/
var mainapp = angular.module("mainapp", []);
	mainapp.controller('studentController', function($scope){
		$scope.student = {
			firstname: "Hanh", 
			lastname: "Nguyen Tai", 
			fullname: function(){
				var studentObject  ;
				studentObject = $scope.student; 
				return studentObject.firstname + " " + studentObject.lastname;
			}
		};
	});