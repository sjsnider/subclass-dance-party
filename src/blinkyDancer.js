var BlinkyDancer = function (top, left, timeBetweenSteps) {
  var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // this.prototype = inherit(Dancer.prototype);

  blinkyDancer.oldStep = Dancer.prototype.step;

  blinkyDancer.step = function() {
    blinkyDancer.oldStep();
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};