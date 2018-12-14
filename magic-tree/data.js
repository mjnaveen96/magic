var products = [{
    id: "FS000",
    name: "feathersoft",
    parent: ["Null"],
    Children:['FSA00','FSB00','FSC00'],
    siblings:["Null"],
    items: [{
          id: "FSA00",
          name: "FS A Dept",
          parent: ["FS000"],
          Children:["FSA01","FSA02"],
          siblings:["FSB00","FSC00"],
          items: [{
              id: "FSA01",
              name: "A Dept Emp1",
              parent: ["FSA00"],
              Children:["Null"],
              siblings:["FSA02","FSB01","FSB02","FSC01","FSC02"]
            }, {
              id: "FSA02",
              name: "A Dept Emp2",
              parent: ["FSA00"],
              Children:["Null"],
              siblings:["FSA01","FSB01","FSB02","FSC01","FSC02"]
              }]
        }, {
            id: "FSB00",
            text: "FS B Dept",
            parent: ["FS000"],
            Children:['FSB01','FSB02'],
            siblings:['FSA00','FSC00'],
            items: [{
                id: "FSB01",
                name: "A Dept Emp1",
                parent: "FSB00",
                Children:"Null",
                siblings:["FSA01","FSA02","FSB02","FSC01","FSC02"]
            },{
                id: "FSB02",
                name: "A Dept Emp2",
                parent: "FSB00",
                Children:"Null",
                siblings:["FSA01","FSA02","FSB01","FSC01","FSC02"]
              }]
        }, {
            id: "FSC00",
            text: "FS C Dept",
            parent: "FS000",
            Children:['FSC01','FSC02'],
            siblings:['FSA00','FSB00'],
            items: [{
                id: "FSC01",
                name: "C Dept Emp1",
                parent: "FSC00",
                Children:"Null",
                siblings:["FSA01","FSA02","FSB01","FSB02","FSC02"]
            },{
                id: "FSC02",
                name: "C Dept Emp2",
                parent: "FSC00",
                Children:"Null",
                siblings:["FSA01","FSA02","FSB01","FSB02","FSC01"]
              }]
            }]
}];
