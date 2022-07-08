class Person {
  constructor(_firstName, _lastName , _age){
    this.firstName= _firstName;
    this.lastName= _lastName;
    this.age= _age; 
  }
  get _firstName(){
    return this.firstName;
  }
  set _firstName(newName){
    this.firstName = newName; 
  }

  get _lastName(){
    return this.lastName;
  }
  set _lastName(newName){
    this.lastName = newName; 
  }

  get _age(){
    return this.age;
  }
  set _age(newName){
    this.age = newName; 
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);

