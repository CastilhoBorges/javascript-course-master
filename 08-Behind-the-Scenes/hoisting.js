// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Augusto";
let job = "developer";
const year = 2005;

// Functions
console.log(addDecl(2, 2));
console.log(addExpr(2, 2));
console.log(addArrow(2, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
