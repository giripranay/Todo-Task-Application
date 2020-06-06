var app = angular.module('todoApp', ['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
            .when('/',{
                 controller:'taskController',
                 templateUrl: 'HTML/task.html'
                
            })
            .when('/new',{
                controller:'taskController',
                templateUrl: 'HTML/newTask.html'
               
           })
           .when('/inProgress',{
            controller:'taskController',
            templateUrl: 'HTML/inProgressTask.html'
           
           })
            .when('/completed',{
                controller:'taskController',
                templateUrl: 'HTML/completedTask.html'
               
           })
            .otherwise({redirectTo:'/'});
});     

app.controller('taskController',['$scope','tasksFactory', function ($scope,tasksFactory) {
    $scope.taskArray = [];
    $scope.editEntry = {'task':"hello"}; 
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
        var datenow = new Date();
        var date = new Date($scope.date);
        if(date<datenow){
            $scope.date = "";
            alert('PickUp Future Date');
            return;
        }
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

    $scope.update = function (entry,status) {
        

        
        entry.status=status
        
        tasksFactory.postTasks(entry).then(function(response){
            $scope.taskArray = response.data;
        },function(err){
            console.log(err);
        })
    };

    $scope.edit = function (entry) {
        $scope.editEntry ={'task':'asdfsdcfsad'};
        
    }
}]);
