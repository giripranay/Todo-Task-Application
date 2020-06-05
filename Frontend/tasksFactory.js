angular.module('todoApp').factory('tasksFactory', function($http){
    var tasks = $http.get('http://127.0.0.1:8083/');
    
    var factory={};
    
    factory.getTasks = function(){
        return tasks;
    }

    factory.postTasks = function(entry){
        tasks = $http.post('http://127.0.0.1:8083/createTask',entry);
        return tasks;
    }
    return factory;
})