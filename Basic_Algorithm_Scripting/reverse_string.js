function reverseString(str) {
    /*let arr = [];
    for(let i = 0; i < str.length; i++){
      arr.push(str[i])
    }
    arr.reverse();  
    str = arr.join('')
    //console.log(str) 
    return str;*/
    return str.split("").reverse().join('')
  }
  
  console.log(reverseString("Oksana"));