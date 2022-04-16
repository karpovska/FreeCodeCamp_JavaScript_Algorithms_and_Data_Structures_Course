let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      console.log("This dog has " + this.numLegs + " legs.");
    }
  };
  
  dog.sayLegs();