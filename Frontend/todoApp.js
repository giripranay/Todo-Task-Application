var app = angular.module('todoApp', ['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
            .when('/',{
                 controller:'taskController',
                 templateUrl: 'task.html'
                
            })
            .otherwise({redirectTo:'/'});
});

app.controller('taskController', function ($scope) {
    $scope.taskArray = [];

    $scope.add = function () {
        var date = new Date($scope.date);
        $scope.taskArray.push({
            label:$scope.label,
            status: "new",
            task: $scope.task,
            date: date.toDateString()
        });
        $scope.label="";
        $scope.task = "";
        $scope.date = "";
    };

    $scope.update = function () {
         var oldArray = $scope.taskArray;
         $scope.taskArray = [];
         angular.forEach(oldArray, function (entry) {
            if (entry.status=='inProgess')
                $scope.taslInProgress.push(entry);

            else if(entry.status=='completed'){
                $scope.taskCompleted.push(entry);
            }

        });
    };

});