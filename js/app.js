var app = angular.module('pristineProjects', []);
app.directive('navbarPristine', function(){
  return{
    restrict: 'E',
    templateUrl: '../pages/navbar.html'
  }
});
