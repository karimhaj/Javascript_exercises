function sumUntil(maxValue) {

    let sum=0;
    for(i=1; i<= maxValue; i++){
      sum +=i;
      console.log(sum);
    }
  
    return sum;
  }
  
  console.log(sumUntil(5));