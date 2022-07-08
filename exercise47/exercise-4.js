const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


for (let [keys,values] of Object.entries(person)) {
  console.log(`${[keys]}: ${[values]}`);
}