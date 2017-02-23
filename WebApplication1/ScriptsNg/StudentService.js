app.service('StudentService', function($http) {
    var urlGet = "";
    this.getAll = function(apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    }
});