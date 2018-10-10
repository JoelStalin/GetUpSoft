angular.module("todoCrtl", [])

// inject the Todo service factory into our controller
    .controller("myControl", ['$scope', '$http', 'Todos', function ($scope, $http, Todos) {
        var vm = this;
		vm.formData = {};
		vm.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
    // use the service to get all the todos
    
           Todos.get()
               .success(function (data) {		
				vm.todos = data;
				vm.loading = false;
            });

        vm.getUser = function () {
            Todos.getUsers()
                .success(function (data) {
                    vm.users = data;

                });
        };

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		vm.createU = function() {
			if (vm.tasks.id !== undefined) {
				vm.loading = true;
				// call the create function from our service (returns a promise object)
                     Todos.createu(vm.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						vm.loading = false;
						vm.formData = {}; // clear the form so our user is ready to enter another
                        vm.users = data; // assign our new list of todos
					});
			}
              };
      
		// DELETE ==================================================================
		// delete a todo after checking it
		vm.deleteTodo = function(id) {
			vm.loading = true;
             
            Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					vm.loading = false;
					vm.todos = data; // assign our new list of todos
				});
		};
    }]);

