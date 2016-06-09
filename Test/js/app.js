var app = angular.module('myApp', ['ngRoute']);

app.config( function($routeProvider){
	$routeProvider
	
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'	
	})
	.when('/volunteer', {
		templateUrl: 'pages/volunteer.html',
		controller: 'volunteerController'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'	
	})
})

app.controller('hdnavController', ['$scope', function($scope){
	$scope.nav = "";
	
}])

app.controller('homeController', ['$scope', function($scope){
	
	
}])

app.controller('volunteerController', ['$scope', function($scope){
	

}])

app.controller('contactController', ['$scope', '$log', function($scope,$log){
	$scope.contactInfo = {
			name:"",
			email:"",
			phone:""		
		};
	$scope.$watch('contactInfo.phone', function(){
		if($scope.contactInfo.phone.ngPattern !== '/[0-9]/'){
        	$scope.contactInfo.phone = $scope.contactInfo.phone.replace(/[a-zA-Z]/g,'');  
		}
	})
	$scope.sendInfo = function(){
		$log.info($scope.contactInfo);
	};	
}])

app.controller('volunteerController', ['$scope', '$log', function($scope,$log){
	$scope.volunteerInfo = {
			phone:"",
			zip:""
	};
	$scope.$watch('volunteerInfo.phone', function(){
		if($scope.volunteerInfo.phone.ngPattern !== '/[0-9]/'){
        	$scope.volunteerInfo.phone = $scope.volunteerInfo.phone.replace(/[a-zA-Z]/g,'');  
		}
	})	
	$scope.$watch('volunteerInfo.zip', function(){
		if($scope.volunteerInfo.zip.ngPattern !== '/[0-9]/'){
        	$scope.volunteerInfo.zip = $scope.volunteerInfo.zip.replace(/[a-zA-Z]/g,'');  
		}
	})
	$scope.sendInfo = function(){
		$log.info($scope.volunteerInfo);
	};
}])

app.controller('rotatorController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.pic = 1;
  
  var slideImage = function() {
    var loop = $timeout(function changePic() {
        if($scope.pic < 3){
          $scope.pic++;
        } else {
          $scope.pic = 1;
        }
        loop = $timeout(changePic, 2000);
    },2000);
  }();
  
}])