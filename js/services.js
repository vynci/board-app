angular.module('boardApp.services',[]).factory('Board',function($resource){
    var myConfig = {
      parse_application_id : "SklPjGlzYGwgzxHI3RUSV8kQJLY2YJw2Jk9XZcOI",
      parse_rest_api_key   : "WzMgKLC3DYN9t78P3kf881CFdKWEhpdA2YbWFe3K"
    };

    return $resource('https://api.parse.com/1/classes/Board/:id',{id:'@objectId'},{
        update: {
            method: 'PUT',
            headers: {
              'X-Parse-Application-Id': myConfig.parse_application_id,
              'X-Parse-REST-API-Key': myConfig.parse_rest_api_key
            }
        },
        query: {
          method: 'GET',
          headers: {
            'X-Parse-Application-Id': myConfig.parse_application_id,
            'X-Parse-REST-API-Key': myConfig.parse_rest_api_key
          }
        },
        get: {
          method: 'GET',
          headers: {
            'X-Parse-Application-Id': myConfig.parse_application_id,
            'X-Parse-REST-API-Key': myConfig.parse_rest_api_key
          }
        },
        save: {
          method: 'POST',
          headers: {
            'X-Parse-Application-Id': myConfig.parse_application_id,
            'X-Parse-REST-API-Key': myConfig.parse_rest_api_key
          }
        },
        delete: {
          method: 'DELETE',
          headers: {
            'X-Parse-Application-Id': myConfig.parse_application_id,
            'X-Parse-REST-API-Key': myConfig.parse_rest_api_key
          }
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
