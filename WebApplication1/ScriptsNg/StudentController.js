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

    $scope.addStudent = function (student) {
        var getData = studentService.addStudent(student);
        getData.then(function (msg) {
            $scope.getStudents();
            alert(msg.data);
            student = {};
            $scope.divStudent = false;
        }, function () {
            alert("Error in adding record");
        });

    };
 

    $scope.addStudentDiv = function () {
        $scope.Action = "Add";
        $scope.divEmployee = true;
        console.log($scope.Action);
    }

    $scope.btnclk = function () {
        if (!$scope.studentId) {
            alert("Enter Student ID");
        }
        else if (!$scope.firstName) {
            alert("Enter First Name");
        }
        else if (!$scope.lastName) {
            alert("Enter Last Name");
        }
        else if (!$scope.email) {
            alert("Enter Email");
        }
        else if (!$scope.address) {
            alert("Enter Address");
        }
        else {
            $scope.emparr.push({
                'arr_studentId': $scope.studentId,
                'arr_firstName': $scope.firstName,
                'arr_lastName': $scope.lastName,
                'arr_email': $scope.email,
                'arr_address': $scope.address
            });
            $scope.studentId = '';
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.email = '';
            $scope.address = '';
        }
    };


}]);

