var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
  $scope.name1="aa";
  $scope.name2="bb";
});
app.directive("colortxt",function(){
  return{
    template:"<h1 style='font-family:tahoma'>asd</h1>"
  }
});
app.controller("ctrl1",function($scope){
    $scope.count=0;
    $scope.myFunction=function(){
      $scope.count++;
    }
});
app.controller("ctrl2",function(){
    count=0;
    myFunction=function(){
      count++;
    }
});
