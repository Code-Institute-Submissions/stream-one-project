angular.module('bandAppControllers', [])
	
	.controller('HomeController', function($scope) {
		$scope.heading = "The Swingers";
	})

	.controller('BookingController', function($scope) {
		$scope.title = "Book a Gig with us";
		$scope.name = "Name & Surname";
		$scope.email = "Email";
		$scope.message = "Message";
		$scope.collectFormData;

		$scope.storeFormData = function() {
			$scope.log = console.log($scope.collectFormData);

			$scope.nameRequired = " ";
			$scope.emailRequired = " ";

			if (!$scope.collectFormData.name) {
				$scope.nameRequired = "Name is Required";
			}
			if (!$scope.collectFormData.email) {
				$scope.emailRequired = "Email Required";
			}
		};
	})

	.controller('AudioController', function($scope) {
		$scope.title = "Listen to our Playlist";
		$scope.album = "Album";
		$scope.track = "Track";
		$scope.play = "Play";
	})
	
    .controller('MediaController', function($scope, Media){
    	$scope.query = '';
    	$scope.$watchCollection('query', function() {
    		if ($scope.query.length > 0) {
    			Media.search({ query: $scope.query}, function(data) {
    				$scope.results = data.results;
    			});
    		} else {
    			$scope.results = [];
    		}
    	});
	});