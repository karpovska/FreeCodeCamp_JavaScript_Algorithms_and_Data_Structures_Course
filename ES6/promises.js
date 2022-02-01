const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
      makeServerRequest.then(result => {
          console.log(result);
      })
    } else {  
      reject("Data not received");
      makeServerRequest.catch(error => {
          console.log(error);
      })
    }
});

