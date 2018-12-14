(function () {
  angular
  .module('magicTree')
  .directive('empIdDirective',empIdDirectiveFun);
  empIdDirectiveFun.$inject = ['$http'];
  function empIdDirectiveFun($http) {
    return {
      link: link,
      templateUrl:"app/tree/Templates/empIdTemplate.html"
    }
    function link(scope,element,attrs) {
      // scope.empId='';
      // console.log(scope.empId);
      $http({
        method: 'GET',
        url:'newdata.json'
      }).then(function(response) {
        // console.log(response.data);
        scope.datArr=[];
        for(i=0;i<10;i++){
          scope.datArr.push(response.data[i].id);
            if(scope.datArr.push(response.data[i].id)===scope.empId){
          console.log(scope.datArr[i]);
          }

        }
      })
    }
  }
})();
