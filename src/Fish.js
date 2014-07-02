var Fish = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.type = 'Fish';
  this.$node.addClass('Fish');
};

Fish.prototype = Object.create(Dancer.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
Fish.prototype.fishClass = function () {
  var random = Math.floor(Math.random()*5);
  var fishClass;
  if (random === 0) {
    fishClass = 'bluefish';
  } else if (random === 1) {
    fishClass = 'oyfish';
  } else if (random === 2) {
    fishClass = 'purplefish';
  } else if (random === 3) {
    fishClass = 'lightbluefish';
  } else {
    fishClass = 'ogbfish';
  }
  this.$node.addClass(fishClass);
};


