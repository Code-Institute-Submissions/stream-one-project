angular.module('BandApp', ['ngRoute', 'bandAppControllers', 'bandAppServices', 'bandAppDirectives']);

angular.module('BandApp').config(function($locationProvider, $routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/the-band', {
		templateUrl: 'templates/the-band.html'
	})
	.when('/music', {
		templateUrl: 'templates/music.html',
		controller: 'AudioController'
	})
	.when('/music', {
		templateUrl: 'templates/music.html',
		controller: 'MediaController'
	})
	.when('/book-us', {
		templateUrl: 'templates/book-us.html',
		controller: 'BookingController'
	})
	.otherwise( { redirectTo: '/' });
});