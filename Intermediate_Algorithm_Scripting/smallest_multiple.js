function smallestCommons(arr) {
    /*const[min, max] = arr.sort((a, b) => a - b);
    const divisorsNum = max - min + 1;
    
    //largest possible value for smallest common multiple SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++){
        upperBound *= i;
    }
    
    //test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max){
        //check if every value in range divides 'multiple"
        let divisorCount = 0;
        for (let i = min; i <= max; i++){
            //count divisors
            if (multiple % i === 0) {
                divisorCount ++;
            }
        }

        if(divisorCount === divisorsNum){
            return multiple;
        }
    } */
    const [min, max] = arr.sort((a, b ) => a - b);
    let multiple = max;
    
    for (let i = max; i >= min; i--){
        if(multiple % i !== 0){
            multiple += max;
            i = max;
        }
    }
    return multiple;
  }
  
  console.log(smallestCommons([1,5]));