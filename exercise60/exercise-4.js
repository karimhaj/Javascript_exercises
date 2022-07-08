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

let fetchPersonById = (id)=>{
  return new Promise((resolve,reject)=>{
    let personId = persons.find((item)=>item.id === id)
    if(personId){
      resolve(personId)
    }
    else reject(new Error('This person id is not valid!'))
  })
}

let fetchJobById = (id)=>{
  return new Promise((resolve,reject)=>{
    let jobId = jobs.find((item)=>item.id === id)
    if(jobId){
      resolve(jobId)
    }
    else reject(new Error('This job id is not valid!'))
  })
}

Promise.all([fetchPersonById(2),fetchJobById(2)]).then((results)=> console.log(results))
.catch((err)=>console.log('There is an error: '+ err))

