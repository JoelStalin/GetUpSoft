angular.module("srvAll", [])
    //var http = app.http;
    // super simple service
    // each function returns a promise object 
    //.service('TodoService', [])
    .factory('Todos', ['$http', function ($http) {
        
        var get = function () {
            return $http.get('/api/todos');
        };
        var create = function(todoData) {
            return $http.post('/api/todos', todoData);
        };
        var elimina = function(id) {
                return $http.delete('/api/todos/' + id);
        };
        var getUsers = function() {
            return $http.get('/api/users');
        };
        var createu = function(todoData) {
            return $http.post('/api/users' , todoData);
        };

        return {
            get: get,
            create: create,
            elimina: elimina,
            getUsers: getUsers,
            createu : createu
      };
    }]);




