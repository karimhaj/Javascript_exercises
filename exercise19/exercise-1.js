const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

//viene modificato perchè cambiare il valore di una chiave in un oggetto significa andare a riprendere la parte in memoria 
//ecco perchè anche se un oggetto viene dichiarato con una costante si posso comunque cambiare i valori