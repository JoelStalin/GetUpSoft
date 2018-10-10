angular.module('userCrtl',[])

    .controller('myUserc', ['$scope', '$http', 'Users', function ($scope, $http, Users) {

	// inject the Todo service factory into our controller
   
        var vm = this;
		//vm.formData = {};
		//vm.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		//Todos.get()
		//	.success(function(data) {
		//		vm.todos = data;
		//		vm.loading = false;
  //          });


		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		//vm.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			//if (vm.formData.text !== undefined) {
			//	vm.loading = true;

			//	// call the create function from our service (returns a promise object)
			//	Todos.create(vm.formData)

			//		// if successful creation, call our get function to get all the new todos
			//		.success(function(data) {
			//			vm.loading = false;
			//			vm.formData = {}; // clear the form so our user is ready to enter another
			//			vm.todos = data; // assign our new list of todos
			//		});
			//}
   //     };
        vm.getUser = function () {
            Users.get()
                .success(function (data) {
                    um.User = data;

                });        
        };
		// DELETE ==================================================================
		// delete a todo after checking it
		//vm.deleteTodo = function(id) {
		//	vm.loading = true;
             
		//	Todos.delete(id)
		//		// if successful creation, call our get function to get all the new todos
		//		.success(function(data) {
		//			vm.loading = false;
		//			vm.todos = data; // assign our new list of todos
		//		});
		//};
    }]);

