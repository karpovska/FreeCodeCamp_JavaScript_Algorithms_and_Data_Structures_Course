//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let otherSymbols = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.toLowerCase().replace(otherSymbols, "-");
  }
  
  console.log(spinalCase('This Is Spinal Tap'));