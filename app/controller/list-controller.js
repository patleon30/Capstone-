'use strict';

scheduleApp.controller('listController', function($scope, $routeParams, $window, scheduleFactory) {

  $scope.formTitle = "list";

  scheduleFactory.getJobs()
  .then( (list) => {
    console.log(list)
    $scope.list = list.data;
  });

  // Hey, this looks familiar! Haven't we seen this defined somewhere else?
  // Yes, but the guts are different. But with the same name as a function over
  // in the todoAddController, the form we're re-using can invoke a single function name
  // but the function does something different depending on what controller is bound to it
  $scope.savelist = () => {
    TodoFactory.updateTodoStatus($scope.list)
    .then( (data) => {
      console.log("Edited list saved");
      $window.location.href = "#!/list/view";
    });
  };


});