//Convert the given number into a roman numeral.

function convertToRoman(num) {
    let roman = "";
    const numsTable = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
    for (let i in numsTable){
      while(num >= numsTable[i]){      
        roman += i;      
        num -= numsTable[i];      
      }    
    }   
    return roman;
  }
  
  console.log(convertToRoman(34));
  console.log(convertToRoman(3));
  console.log(convertToRoman(105));