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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];


let fetchPersonByID = function(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let personsId = persons.find((item)=> item.id === id);

    if (personsId){
      resolve(personsId); 
    }
    else reject(new Error('ID is not valid!'))
  },1000)

  }) 
}

let fetchJobByID = function(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let jobsId = jobs.find((item)=> item.id === id);

    if (jobsId){
      resolve(jobsId); 
    }
    else reject(new Error('ID is not valid!'))
  },500)

  }) 
}

Promise.race([fetchPersonByID(1),fetchJobByID(1)]).then((result)=> console.log(result))
.catch((err)=> console.log(`There is an Error: ${err}`))