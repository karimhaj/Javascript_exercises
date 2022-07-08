function calculateAverageAge(persons) {
let i = 0;
let averageAge;
let calc = 0; 
let numbers= persons[i].age;
for(i=0 ; i<persons.length ; i++){
  numbers=persons[i].age;
}

return averageAge= calc / persons.length;

}





const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);

/*  let inizio= persons[i].age;
  calcolo= persons[i].age+persons[i].age;

console.log('qua inizia la funzione');
function qualcosAltro(){
  let newmber= 0;
  let calc= 0;
  do {
    newmber++
    calc+=newmber;
  }
  while(newmber<10);

  console.log(calc);
}

qualcosAltro();*/