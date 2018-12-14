(function () {
  angular
  .module('magicTree')
  .directive('treeDirective',treeDirectiveFun);
  treeDirectiveFun.$inject = ['$http'];
  function treeDirectiveFun($http) {
    return{
      link : treeFun,
      templateUrl:"app/tree/Templates/treeTemplate.html"
    }
    function treeFun(scope,element,attrs) {
      dat=scope.empId;
      scope.data;
      var treeArr=[];
$http({
  method: 'GET',
  url:'maindata.json'
}).then(function(response) {
  // console.log(response.data);
  scope.data=response.data;
  console.log(scope.data);
  // search(response.data);
  // scope.data = response.data[0].Children[i];
  // scope.datArr=[];
  // scope.datArr1=[];
  // scope.datArr2=[];
  // for(i=0;i<response.data.length;i++){
  //   scope.datArr.push(response.data[i].id);
  //   console.log(scope.data = response.data[i].id);
  // for(j=0;j<response.data[i].items.length;j++){
  //   console.log(scope.data = response.data[i].items[j].id);
  //   scope.datArr1.push(response.data[i].items[j].id);
  //   for(k=0;k<response.data[i].items[j].items.length;k++){
  //     scope.datArr2.push(response.data[i].items[j].items[k].id);
  //     console.log(scope.data = response.data[i].items[j].items[k].id);
  //   }
  // }
  //
  // }
})

scope.search=function(){
 console.log("hello");
 let found=0;
 for(i=0;i<scope.data.length;i++)
 {
    if((scope.data[i].id)==(scope.empId))
    {
      found=1;
      console.log("parent null");
     console.log(scope.data[i].id);
     treeArr.push(scope.data[i].id);
     createTree(treeArr);
     treeArr=[];
     break;
    }
   else if(found==0)
   {
     // console.log("not in level one");
     for(j=0;j<scope.data[i].items.length;j++)
     {
       if((scope.data[i].items[j].id)==(scope.empId))
       {
         found=1;
         console.log("parent1 "+scope.data[i].id);
         console.log(scope.data[i].items[j].id);
         treeArr.push(scope.data[i].id);
         treeArr.push(scope.data[i].items[j].id);
         createTree(treeArr);
         treeArr=[];
          break;
       }
       else if(found==0)
       {
         // console.log("not in level two");
         for(k=0;k<scope.data[i].items[j].items.length;k++)
         {
            if ((scope.data[i].items[j].items[k].id)==(scope.empId))
            {
              found=1;
              console.log("parent1 "+scope.data[i].id);
              console.log("parent2 "+scope.data[i].items[j].id);
              console.log(scope.data[i].items[j].items[k].id);
              treeArr.push(scope.data[i].id);
              treeArr.push(scope.data[i].items[j].id);
              treeArr.push(scope.data[i].items[j].items[k].id);
              createTree(treeArr);
              treeArr=[];
               break;
            }
            else
            {
              // console.log("not in level three");
              found=0;
            }
         }
       }

     }
   }
 }
}

    function createTree(elem){
      for(i=0;i<elem.length;i++){
          var para = document.createElement("p");
          var x = document.createElement("br");
          var node = document.createTextNode(elem[i]);
          para.appendChild(node);
          var element = document.getElementById("tree");
          element.appendChild(para);
          element.appendChild(x);

      }
    }

    }

  }
})();
