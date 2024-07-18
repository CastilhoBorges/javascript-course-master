// Primitives Types
let lastName = "Castilho";
let oldLastName = lastName;
lastName = "Dor";
console.log(lastName, oldLastName);

// Reference Types
const me = {
  name: "Augusto",
  lastName: "Castilho",
  age: 19,
};

const dor = me;
dor.lastName = "dorn";
console.log(me, dor);

// Copying objects
const me2 = {
  name: "Augusto",
  lastName: "Castilho",
  age: 19,
  family: ["Antona", "Cintia"],
};

const castilhoCopy = Object.assign({}, me2);
castilhoCopy.lastName = "Trant";
console.log(me2);
console.log(castilhoCopy);

castilhoCopy.family.push("Helanita");
console.log(castilhoCopy);
