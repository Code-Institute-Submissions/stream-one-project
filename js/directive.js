angular.module('bandAppDirectives', [])
	.directive('imageCarousel', function(){
		return{
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/carousel.html'
		};
	})

	.directive('musicTable', function(){
		return{
			restrict: 'EA',
			templateUrl: 'templates/directives/music-table.html'
		};
	})

	.directive('searchItunes', function() {
		return{
			restrict: 'E',
			templateUrl: 'templates/directives/search-itunes.html'
		};
	});