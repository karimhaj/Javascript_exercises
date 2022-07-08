function memoize(fn) {
  let cache = {};
return x => {
  if (x in cache){
  console.log(`${x} found in cache => ${cache[x]}` )
  return cache[x]
  }
  else{
    let result= fn(x);
    cache[x]= result;
    return result
  }
}
}


function factorial(x) {
  if (x === 0) {
    return 1;
  }
  let factorialResult= x * factorial(x - 1);
  return factorialResult;
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
