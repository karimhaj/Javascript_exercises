const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, ...rest} = person
const personInfo = rest;
console.log(id, personInfo);