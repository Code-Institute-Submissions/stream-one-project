angular.module('bandAppDirectives', [])
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