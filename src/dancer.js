// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
 this.timeBetweenSteps=timeBetweenSteps;
  this.$node = $('<span class="dancing"> <img class="trump" src="/Users/student/Downloads/Donald-trump-4.png"></span>');

  this.setPosition(top, left);

this.step(this.timeBetweenSteps);
};





 makeDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.animate({"left":"-=50px"}, "slow");
   
   this.$node.animate({"left":"+=50px"}, "slow");
  var xxx = this;
  setTimeout(function(){xxx.step(this.timeBetweenSteps)},this.timeBetweenSteps);
  };


makeDancer.prototype.setPosition = function(top, left) {
  
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
