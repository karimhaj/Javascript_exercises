class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

static fromObject(theObject){
const anotherObject = new Person(theObject.firstName,theObject.lastName)
return anotherObject;
}
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person)