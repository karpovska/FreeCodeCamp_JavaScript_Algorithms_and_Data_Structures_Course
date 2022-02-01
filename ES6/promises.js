const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
      makeServerRequest.then(result => {
          console.log(result);
      })
    } else {  
      reject("Data not received");
    }
});

