// MAKE THE BELOW PC!!!
//trump
var makeTrump = function(top, left, timeBetweenSteps) {
makeDancer.call(this,top, left, timeBetweenSteps);
this.top=top;
this.left=left;
 

}

makeTrump.prototype=Object.create(makeDancer.prototype);
makeTrump.prototype.constructor=makeTrump;





//Clinton
var makeClinton = function(top, left, timeBetweenSteps) {
makeDancer.call(this,top, left, timeBetweenSteps);
this.$node=$('<span class="dancing clinton"> <img class="clinton" src="/Users/student/Downloads/CLINTON.png"></span>');
this.setPosition(top, left, timeBetweenSteps)
this.top=top;
this.left=left;


};

makeClinton.prototype = Object.create(makeDancer.prototype);
makeClinton.prototype.constructor = makeClinton;

makeClinton.prototype.step = function(timeBetweenSteps) {
  this.$node.animate({"top":"-=20px"}, "slow");
   
   this.$node.animate({"top":"+=20px"}, "slow");
  var xxx = this;
  setTimeout(function(){xxx.step(this.timeBetweenSteps)},this.timeBetweenSteps);
  };



var makeSanders = function(top, left, timeBetweenSteps) {
makeDancer.call(this,top, left, timeBetweenSteps);
this.$node=$('<span class="dancing sanders"><img class="sandwich" src="/Users/student/Downloads/sanders.png"></span>');
this.setPosition(top, left, timeBetweenSteps);
this.top=top;
this.left=left;


};




makeSanders.prototype = Object.create(makeDancer.prototype);
makeSanders.prototype.constructor = makeSanders;



makeSanders.prototype.step = function(timeBetweenSteps) {

   this.$node.animate({"top":"-=25px", "left":"+=25px"}, "slow");
   
    this.$node.animate({"top":"+=25px", "left":"-=25px"}, "slow");
     this.$node.animate({"top":"-=25px", "left":"-=25px"}, "slow");
      this.$node.animate({"top":"+=25px", "left":"+=25px"}, "slow");
  var xxx = this;
  setTimeout(function(){xxx.step(this.timeBetweenSteps)},this.timeBetweenSteps)
  };



