angular.module('bandAppDirectives', [])

	//Directive for the Audio Controller
	.directive('musicTable', function(){
		return{
			restrict: 'EA',  // EA -> Element/Attribute
			templateUrl: 'templates/directives/music-table.html'
		};
	})

	//Directive for the itunesController
	.directive('searchItunes', function() {
		return{
			restrict: 'EA',  // EA -> Element/Attribute
			scope: true,
			templateUrl: 'templates/directives/search-itunes.html'
		};
	});