// MAKE THE BELOW PC!!!
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
makeDancer.call(this,top, left, timeBetweenSteps)
this.top=top;
this.left=left;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;
  

  this.step = function() {

    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

   this.$node.animate({"left":"-=50px"}, "slow");
   
    this.$node.animate({"left":"+=50px"}, "slow");

};
}

makeBlinkyDancer.prototype=Object.create(makeDancer.prototype)
makeBlinkyDancer.prototype.constructor=makeBlinkyDancer;



var makeOtherDancer = function(top, left, timeBetweenSteps) {
makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;
  

  this.step = function() {

    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

   this.$node.animate({"top":"-=100px"}, "slow");
   
    this.$node.animate({"top":"+=100px"}, "slow");


};
}


var makeAnotherDancer = function(top, left, timeBetweenSteps) {
makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;
  

  this.step = function() {

    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

   this.$node.animate({"top":"-=100px", "left":"+=100px"}, "slow");
   
    this.$node.animate({"top":"+=100px", "left":"-=100px"}, "slow");


};
}