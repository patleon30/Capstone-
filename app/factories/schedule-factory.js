'use strict';

scheduleApp.factory("scheduleFactory", function($q, $http, FirebaseUrl) {

  let getJobs = () => {
  return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}/Jobs.json`)
      .then( (jobsData) => {
        console.log(jobsData);
        resolve(jobsData);
      })
      .catch( (err) => {
        console.log("oops", err);
        reject(err);
      });
    });
  };

  let postNewItem = (newItem) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseUrl}todos.json`,
        angular.toJson(newItem))
      .then( (newItemData) => {
        resolve(newItemData);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  let updateTodoStatus = (todo) => {
    return $q( (resolve, reject) => {
      let itemId = todo.id;
      // PUT the entire obj to FB
      if (itemId) {
        $http.put(`${FirebaseUrl}todos/${itemId}.json`,
          angular.toJson(todo))
        .then( (data) => {
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      } else {
        console.log("I'm burned out for the day. Go home");
      }
    });
  };

  let deleteTodoItem = (todoId) => {
    return $q( (resolve, reject) => {
      if (todoId) {
        $http.delete(`${FirebaseUrl}todos/${todoId}.json`)
        .then( (data) => {
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      } else {
        console.log("No id passed in");
      }
    });
  };

  let getSingleTodoItem = (itemId) => {
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}todos/${itemId}.json`)
      .then( (todo) => {
        resolve(todo.data);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  return { getJobs, postNewItem, deleteTodoItem, updateTodoStatus, getSingleTodoItem };
});