/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  
    let decoded = "";
    const regEx = /[A-Z]/;
    let findChar = 0; 
    for(let i = 0; i < str.length; i++){
      if(regEx.test(str[i])){
        findChar = (str.charCodeAt(i) - 13);
        if(findChar < 65){
          findChar += 26;
        } else if(findChar > 90){
          findChar -= 26;
        }      
        decoded += String.fromCharCode(findChar);
      } else {
        decoded += str[i];
      }
    }
    
    //decoded = str.replace(/[A-Z]/g, letter => String.fromCharCode((letter.charCodeAt(0) % 26) + 65));
    return decoded;
    
  }
  
  console.log(rot13("SERR PBQR PNZC"));