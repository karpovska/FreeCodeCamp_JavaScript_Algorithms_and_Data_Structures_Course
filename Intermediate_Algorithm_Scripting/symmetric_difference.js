//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2).filter(element => !arr1.includes(element) || !arr2.includes(element));  
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5]);