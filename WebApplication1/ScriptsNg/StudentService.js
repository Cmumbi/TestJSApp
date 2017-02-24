app.service('StudentService', function($http) {
    var urlGet = "";
    this.getAll = function(apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    };
    this.addStudent=function(student) {
        var response = $http({
            method: "post",
            url: "baseUrl/AddStudents",
            data: JSON.stringify(student),
            dataType: "json"
        });
        return response;
    }
});