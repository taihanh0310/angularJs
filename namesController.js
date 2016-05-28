// JavaScript source code
var myApp = angular.module('myApp', []);
myApp.controller('nameController', function ($scope) {
    $scope.names = [
                    { name: 'hanh', country: 'viet name' },
                    { name: 'thuy', country: 'han quoc' },
                    { name: 'chua biet', country: 'han dsadas' },
                    { name: 'chua biasasaset', country: 'sshan dsadas' },
                    { name: 'chsua biasasaset', country: 'sshan dsadas' },
                    { name: 'chussa biasasaset', country: 'sshasn dsadas' }  ,
                    { name: 'chua bssiasasaset', country: 'ssshan dsadas' }  ,
                    { name: 'csshua biasasaset', country: 'ssshan dsadas' }   ,
                    ];
});