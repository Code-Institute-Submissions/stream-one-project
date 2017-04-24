/*angular.module('bandAppServices', []).factory('bandAppService', function($http) {
	return {
		getList: getList
	};

	function getList(url) {
		return $http.get(url);
	}
});*/
angular.module('bandAppServices', ['ngResource'])
	.factory('Media', function($resource) {
        return $resource( 'https://itunes.apple.com/search?term=:query',{query: '@query'}, {
          search: {
            method: 'JSONP',
            params: {
              limit: 10,
              callback: 'JSON_CALLBACK'
            }
          }
        });
      });