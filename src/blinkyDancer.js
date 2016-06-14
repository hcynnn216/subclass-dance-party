// MAKE THE BELOW PC!!!
//trump
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


//Clinton
var makeOtherDancer = function(top, left, timeBetweenSteps) {
makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;
  
this.$node=$('<span class="dancing"> <img class="clinton" src="/Users/student/Downloads/CLINTON.png"></span>')

this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  this.setPosition(top, left);









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
this.$node=$('<span class="dancing"><img src="/Users/student/Downloads/sanders.png"></span>')
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;


  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };


  this.setPosition(top, left);
  

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