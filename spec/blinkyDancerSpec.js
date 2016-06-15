
describe('Trump', function() {
  var timeBetweenSteps = 100; 
  var trump;

  beforeEach(function() {
    trump = new makeTrump(10, 20, timeBetweenSteps);
   
  });

  it('should have a jQuery $node object', function() {
    expect(trump.$node).to.be.an.instanceof(jQuery);
  });

});


describe('Clinton', function() {
  var timeBetweenSteps = 100; 
  var clinton;

  beforeEach(function() {
    clinton = new makeClinton(10, 20, timeBetweenSteps);
   
  });

  it('should have a jQuery $node object', function() {
    expect(clinton.$node).to.be.an.instanceof(jQuery);
  });

});

describe('Sanders', function() {
  var timeBetweenSteps = 100; 
  var Sanders;

  beforeEach(function() {
    sanders = new makeSanders(10, 20, timeBetweenSteps);
   
  });

  it('should have a jQuery $node object', function() {
    expect(sanders.$node).to.be.an.instanceof(jQuery);
  });

});