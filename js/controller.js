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

	.controller('iTunesController', function($scope, $http) {

		$scope.searchiTunes = function(artist){
        // use the jsonp callback function from the $http service this
        // will get around any limitations for cross-domain scripting.
        $http.jsonp('http://itunes.apple.com/search', {
            params: {
                'callback': 'JSON_CALLBACK',
                'term': artist
            }
        }).then(onSearchComplete, onError);
    };

    // Get the data out of the response when search succeeds.
    var onSearchComplete = function(response){
        
        $scope.data = response.data;
        $scope.songs = response.data.results;
    };

    var onError = function(reason){
        $scope.error = reason;
    };
	});