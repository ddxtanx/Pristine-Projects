var app = angular.module('pristineProjects', []);
app.directive('navbarPristine', function(){
  return{
    restrict: 'E',
    templateUrl: 'http://pristine-projects.herokuapp.com/pages/navbar.html'
  }
});
