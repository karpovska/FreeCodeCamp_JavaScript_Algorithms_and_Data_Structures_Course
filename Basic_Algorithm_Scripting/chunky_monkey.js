/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/
function chunkArrayInGroups(arr, size) {
    let finalArr = [];  
    let j = 0;
    for (let i = 0; i < arr.length/size; i++){
      finalArr.push([]);
      for (j; j < size*(i + 1); j++){
        if(arr[j] != undefined) {
          finalArr[i].push(arr[j])      
        }
      }
    }
    console.log(finalArr)
    return finalArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
  