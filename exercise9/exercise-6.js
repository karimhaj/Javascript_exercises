function getKeys(obj) {
let keyList=[];
  for (const key in obj) {

    if (obj.hasOwnProperty(key)) {
        //console.log(`${key}`)
        keyList.push(key);
    }  
}
return(keyList);
} 

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);

