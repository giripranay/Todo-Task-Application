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

app.controller('taskController',['$scope','tasksFactory', function ($scope,tasksFactory) {
    $scope.taskArray = [];
    function init(){
        
        tasksFactory.getTasks()
            .then(function(tasks){
                $scope.taskArray = tasks.data;
            },function(err){
                console.log(err);
            });
    }
    init();
    $scope.add = function () {
        var date = new Date($scope.date);
        var d=date.getDate();
        var m=date.getMonth()+1;
        var y=date.getYear()+1900;
        date = ''.concat(y,'-',m,'-',d);

        tasksFactory.postTasks({
            label:$scope.label,
            status: "new",
            task: $scope.task,
            date: date
        }).then(function(response){
            $scope.taskArray = response.data;
        },function(err){
            console.log(err);
        })
       
        $scope.label="";
        $scope.task = "";
        $scope.date = "";
    };

    $scope.update = function (entry) {
        

        if(entry.status=='new'){
            entry.status='inProgress'
        }
        else{
            entry.status='completed'
        }
        tasksFactory.postTasks(entry).then(function(response){
            $scope.taskArray = response.data;
        },function(err){
            console.log(err);
        })
    };

}]);