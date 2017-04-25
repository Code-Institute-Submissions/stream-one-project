angular.module('bandAppServices', ['ngResource'])
	.factory('Media', function($resource) {
        return $resource( 'https://itunes.apple.com/search?term=:query',{query: '@query'}, {
          search: {
            method: 'JSONP',
            params: {
              limit: 10,
            }
          }
        });
      }).config(function ($sceProvider) {
    $sceProvider.enabled(false);
  });