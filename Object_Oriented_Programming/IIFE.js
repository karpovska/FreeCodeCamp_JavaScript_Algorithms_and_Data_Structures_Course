(function () {
    console.log("A cozy nest is ready");
  })();
  
  let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        }
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        }
      }
    }
  })();
  