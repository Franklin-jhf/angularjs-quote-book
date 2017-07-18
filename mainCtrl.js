angular.module('app').controller('mainCtrl', function($scope, mainSrvc){
	
	$scope.quotes = mainSrvc.getQuotes();

	$scope.addData = mainSrvc.addData;

	$scope.removeData = mainSrvc.removeData;




});