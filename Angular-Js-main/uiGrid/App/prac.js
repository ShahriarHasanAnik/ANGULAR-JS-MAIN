var application=angular.module('myapp',[]);

application.service('random', function()
{
 var name="Anik";
 console.log(name);
 this.generate=function()
 {
    return name;
 }
 });
 application.controller('appController',function($scope,$rootScope,random)
 {
     $scope.generateName=function()
     {
     $scope.g_Name=random.generate();
     };
 });


