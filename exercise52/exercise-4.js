const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const personArr = Object.entries(person);
let filteredArr = personArr.filter(item => typeof item[1] === "number");
const filteredPerson = Object.fromEntries(filteredArr);
const json = JSON.stringify(filteredPerson);
console.log(json); // Should return: { id: 1, age: 25 }
