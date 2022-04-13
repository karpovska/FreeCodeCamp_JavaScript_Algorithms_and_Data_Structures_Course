function titleCase(str) {
    let arr = str.split('');
    let newTitle = str.split(' ');
    let updatedTitle = [];
    
    arr[0] = arr[0].toUpperCase();

    for (let ch in newTitle){        
        updatedTitle[ch] = newTitle[ch][0].toUpperCase() + newTitle[ch].slice(1).toLowerCase();
    }
    /*for (let i = 0; i < arr.length - 1; i++){
      if(arr[i] === ' '){
        arr[i + 1] = arr[i + 1].toUpperCase();
      } else {
        arr[i + 1] = arr[i + 1].toLowerCase();
      }    
      //console.log(arr[i], arr[i + 1])
    }*/
    console.log(updatedTitle.join(' '));
    //return arr.join('');
    return updatedTitle.join(' ');
  }
  
  titleCase("I'm a little tea pot");