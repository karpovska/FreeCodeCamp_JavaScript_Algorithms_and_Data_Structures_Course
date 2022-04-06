//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    let largest = [];
    for (let i = 0; i < arr.length; i++){
      largest.push(Math.max(...arr[i]))
    }
    //console.log(largest)
    return largest;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);