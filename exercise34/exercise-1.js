// Class definition
class Person {
    constructor(_firstName, _lastName){
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.firstName} ${developer.lastName}`);