var lessonplans = angular.module("lessonplansapp", [ "ngRoute" ]);

lessonplans.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/views/main.html",
      controller: "mainController"
    });
});
