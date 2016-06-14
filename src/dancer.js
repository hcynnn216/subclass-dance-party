// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
 
  this.$node = $('<span class="dancing"> <img class="trump" src="/Users/student/Downloads/Donald-trump-4.png"></span>');



  this.setPosition(top, left);

  

  

};





 makeDancer.prototype.step = function(timeBetweenSteps) {
  console.log('step working')
  var xxx = this;
  setTimeout(function(){xxx.step(1000)},1000);
  this.step(1000);
  };


makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
