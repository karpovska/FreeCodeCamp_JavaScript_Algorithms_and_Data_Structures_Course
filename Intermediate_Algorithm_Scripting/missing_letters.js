/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
    let missing = "";
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i + 1) - str.charCodeAt(i) > 1){
            return missing = String.fromCharCode(str[i].charCodeAt() + 1);
        }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abcdeg"));