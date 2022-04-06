function factorialize(num) {
    //let f = 1;
    if(num === 0) {
        return 1;
    }
    
    return num * factorialize(num - 1)
    
   // console.log(num);   
    
  }
  
 console.log(factorialize(3));