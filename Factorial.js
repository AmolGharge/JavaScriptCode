

function factorial(num) {
    if (num === 0 || num === 1) {
      return num;
    }
        
    return num * factorial(num - 1); //  factorial is a Function Name here, not mathematical function
  
  }
  
  let n = factorial(5);
  console.log(n);

