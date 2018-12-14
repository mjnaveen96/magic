(function () {
  angular
  .module('magicTree')
  .directive('trooDirective',treeDirectiveFun);
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
  console.log(scope.data);
})

// scope.search=function(dat){
//  console.log("hello");
//  for(i=0;i<scope.data.length;i++)
//  {
//      if((scope.data[i].id)==dat)
//      {
//        console.log(scope.data[i].id);
//        treeArr.push(scope.data[i].id);
//        for(j=0;j<(scope.data[i].parent.length);j++)
//        {
//          if(scope.data[i].parent[0]!="Null")
//          {
//            // console.log("parent"+scope.data[i].parent[j]);
//            scope.search(scope.data[i].parent[j]);
//          }else
//          {
//            createTree(treeArr);
//            treeArr.length=0;
//          }
//         }
//
//      }
//  }
// }

scope.search = function(id, stat = false) {
  if(stat === true) {
    scope.treeArr.length = 0;
  }
  for(let i = 0; i < scope.data.length; i++) {
    if(scope.data[i].id === id) {
      scope.treeArr.unshift(scope.data[i].id);
      console.log('element found');
      if(scope.data[i].parent[0] != "Null") {
        console.log("no parent");
        scope.search(scope.data[i].parent[0]);
      } else {
        console.log(scope.treeArr);
        // createTree(scope.treeArr);
        // scope.treeArr.length = 0;
      }
    }
  }
}

    // function createTree(elem){
    //   elem = elem.slice();
    //   var element = document.getElementById("tree");
    //   element.innerHTML = "";
    //   for(i=elem.length-1;i>=0;i--){
    //       var para = document.createElement("li");
    //
    //       para.setAttribute('ng-click', `getChild('${elem[i]}')`);
    //       var node = document.createTextNode(elem[i]);
    //       para.appendChild(node);
    //
    //       element.appendChild(para);
    //
    //   }
    // }

    scope.getChild = function(id,stat = false) {
      if(stat === true) {
        scope.childTreeArr.length = 0;
      }
      console.log(id);
      // scope.myVar="true";
      for(let i=0; i < scope.data.length;i++){
        if(scope.data[i].id === id){
          for(let j = 0; j < scope.data[i].Children.length; j++)
          {
            if (scope.data[i].Children[j] !== "Null") {
              scope.childTreeArr.push(scope.data[i].Children[j]);
              console.log(scope.data[i].Children[j]);
              scope.myVar = !scope.myVar;
            }
          }
        }
      }
    }



  }

  }
})();
