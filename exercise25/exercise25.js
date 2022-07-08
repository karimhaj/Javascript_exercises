const person = {
    get name(){
        return this.firstName;
    },
    set name(value){
        this.firstName = value;
    },
    get surname(){
        return this.lastName;
    },
    set surname(value){
        this.lastName = value;
    },
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    }

    const john = Object.create(person);
    john.name = 'John';
    john.surname = 'Doe';
    
    const simon = Object.create(person);
    simon.name = 'Simon';
    simon.surname = 'Collins';

    console.log(john.fullName()); // John Doe
    console.log(simon.fullName()); // Simon Collins
    
    