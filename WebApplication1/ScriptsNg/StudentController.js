app.controller("StudentCtrl", ["$scope", "StudentService",

function ($scope, studentService) {

    var baseUrl = "http://localhost:50901/student/";

    $scope.getStudents = function () {
        var apiRoute = baseUrl + "GetStudents/";
        var student = studentService.getAll(apiRoute);
        student.then(function (response) {
            $scope.students = response.data;
        },
        function (error) {
            console.log("Error: " + error);
        });

    }
    $scope.getStudents();

    $scope.addStudent = function () {
        var getAction = $scope.Action;
        var getData;
        if (getAction === "Update") {
            studentService.ID = $scope.studentId;
            getData = studentService.updatestudent();
            getData.then(function (msg) {
                $scope.getStudents();
                alert(msg.data);
                $scope.divStudent = false;
            }, function () {
                alert("Error in updating record");
            });
        } else {

            getData = studentService.addStudent();
            getData.then(function (msg) {
                $scope.getStudents();
                alert(msg.data);
                $scope.divStudent = false;
            }, function () {
                alert("Error in adding record");
            });
        }
    }


    $scope.addStudentDiv = function () {
        $scope.Action = "Add";
        $scope.divEmployee = true;
        console.log($scope.Action);
    }
}]);

