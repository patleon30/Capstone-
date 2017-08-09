'use strict';

scheduleApp.controller("ScheduleController", function($scope, $window, UserFactory) {

  let currentUser = null;

  UserFactory.isAuthenticated()
    .then((user) => {
      console.log("user status", user);
      currentUser = UserFactory.getUser();
      fetchComp();
    });
 });

