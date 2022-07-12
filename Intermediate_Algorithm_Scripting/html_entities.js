/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.*/

function convertHTML(str) {
    let symbolsArr = str.split('');
    console.log(symbolsArr);
    [...symbolsArr].forEach((char, index) => {
        switch(char) {
            case "<":
                symbolsArr[index] = "&lt;";
                break;                
            case ">":
                symbolsArr[index] = "&gt;";
                break;
            case "&":
                symbolsArr[index] = "&amp;";
                break;
            case '"':
                symbolsArr[index] = "&quot;";
                break;
            case "'":
                symbolsArr[index] = "&apos;";
                break; 
        }
    })
    
    return symbolsArr.join('');
  }
  
  convertHTML("Dolce & Gabbana");