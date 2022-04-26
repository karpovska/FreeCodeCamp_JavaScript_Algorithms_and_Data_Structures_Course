function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
      console.log('niam niam');
    },
    describe: function() {
      console.log(`My name is ${this.name}`);
    }
  };