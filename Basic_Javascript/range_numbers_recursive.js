function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];   
    } else {      
      const rangeArray = rangeOfNumbers(startNum, endNum - 1);
      rangeArray.push(endNum);
      return rangeArray;    
    }
  };

  console.log(rangeOfNumbers(3, 15));