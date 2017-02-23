app.controller("StudentCtrl", ["$scope", "StudentService",

function ($scope, StudentService) {

    var baseUrl = "http://localhost:50901/student/";

    $scope.getStudents = function () {
        var apiRoute = baseUrl + "GetStudents/";
        var student = StudentService.getAll(apiRoute);
        student.then(function (response) {
            console.log(response);
            $scope.students = response.data;
        },
        function (error) {
            console.log("Error: " + error);
        });

    }
    $scope.getStudents();

}]);