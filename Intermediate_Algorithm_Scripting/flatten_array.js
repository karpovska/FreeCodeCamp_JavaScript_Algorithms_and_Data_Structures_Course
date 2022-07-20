/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
    let final = [];
    for(let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])){
        final.push(...steamrollArray(arr[i]));
      } else {
        final.push(arr[i]);
      }
    }
    return final;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([[["a"]], [["b"]]]));