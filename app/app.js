'use strict';
// create our angular module and inject firebase
let scheduleApp = angular.module('scheduleApp', ['ngRoute'])
.constant("FirebaseUrl", "https://schedulingapp-fc799.firebaseio.com");

let isAuth = (UserFactory) => {
  return new Promise ( (resolve, reject) => {
    UserFactory.isAuthenticated()
    .then( (userBoolean) => {
      if (userBoolean) {
      resolve();
        } else {
          reject();
        }
    });
  });
};




// create our main controller and get access to firebase
// .controller('mainController', function($scope, $firebase) {

//   // connect to firebase
//   var ref = new Firebase("https://burning-torch-4263.firebaseio.com/days");
//   var fb = $firebase(ref);

// });


  scheduleApp.config(($routeProvider) => {

        $routeProvider
        .when('/', {
          templateUrl: 'Partials/login.html',
          controller:'UserController'
        })
        .when('/schedule/home', {
          templateUrl:'Partials/home.html',
          controller: 'scheduleController'
        })

        .when('/navbar', {
        templateUrl: 'Partials/navbar.html',
        controller:'navController'
        })

        .otherwise('/');
  });