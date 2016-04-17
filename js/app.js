var app = angular.module('pristineProjects', []);
app.directive('navbar', function(){
  return{
    restrict: 'E',
    templateUrl: '../pages/navbar.html'
  }
});
