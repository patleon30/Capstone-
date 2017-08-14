'use strict';

scheduleApp.controller('detailsController', function($scope, $routeParams, $window, scheduleFactory) {

  scheduleAppFactory.getSingleTodoItem($routeParams.todoId)
  .then( (schedule) => {
    console.log("schedule item", todo);
    $scope.selectedItem = todo;
  })
  .catch( (err) => {
    console.log("error! No item returned", err );
  });

  $scope.loadEditForm = (selectedItemId) => {
    $window.location.href = `#!/schedule/edit/${selectedItemId}`;
  };

});