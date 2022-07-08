const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve,reject)=>{
    if (typeof id === "number" && id>0){
      resolve(id);
    }
    else{
      reject(new Error('this id is not valid!'));
    }
  })
}

let promise = fetchPersonById(3)
promise 
.then((value)=>{
value-=1;
console.log(persons[value]);
})
