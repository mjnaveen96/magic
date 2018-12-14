(function () {
  angular
  .module('magicTree')
  .directive('truuDirective',treeDirectiveFun);
  treeDirectiveFun.$inject = ['$http'];
  function treeDirectiveFun($http) {
    return{
      link : treeFun,
      templateUrl:"app/tree/Templates/treeTemplate.html"
    }
    function treeFun(scope,element,attrs) {
      dat=scope.empId;
      scope.data;
      scope.treeArr=[];
      scope.childTreeArr = [];
$http({
  method: 'GET',
  url:'newdata.json'
}).then(function(response) {
  scope.data=response.data;
})

scope.search = function(id, stat = false) {
  // if(stat === true) {
  //   scope.treeArr.length = 0;
  // }
  for(let i = 0; i < scope.data.length; i++) {
    if(scope.data[i].id === id) {
      scope.treeArr.unshift(scope.data[i].id);
      if(scope.data[i].parent[0] != "Null") {
        scope.search(scope.data[i].parent[0]);
      } else {
        // console.log(scope.treeArr);
        createTree(scope.treeArr);
        // scope.treeArr.length = 0;
      }
    }
  }
}

// scope.getChild = function(id,stat = false,ind) {
  // if(stat === true) {
  //   scope.childTreeArr.length = 0;
  // }
  // scope.treeArr.splice(ind+1,scope.treeArr.length-1);
  scope.getChild = function(id) {
  for(let i=0; i < scope.data.length;i++){
    if(scope.data[i].id === id){
      for(let j = 0; j < scope.data[i].Children.length; j++)
      {
        if (scope.data[i].Children[j] !== "Null") {
          scope.childTreeArr.push(scope.data[i].Children[j]);
          // scope.myVar = !scope.myVar;
          console.log(scope.data[i].Children[j]);
        }
      }
    }
  }
}

function createTree(elem){
  // elem = elem.slice();
  // var element = document.getElementById("tree");
  // element.innerHTML = "";
  for(i = 0 ; i < elem.length ; i++){
      var para = document.createElement("div");
      var node = document.createTextNode(elem[i]);
      var element = document.getElementById("tree");
      // para.setAttribute('ng-click', `getChild('${elem[i]}')`);
      para.appendChild(node);
      element.appendChild(para);
  }
}




  }

  }
})();
