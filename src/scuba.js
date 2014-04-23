var Scuba = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("scuba");
};
Scuba.prototype = Object.create(Dancer.prototype);
Scuba.prototype.constructor = Scuba;

Scuba.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css({
    'background-image': 'url(images/scuba.png)',
    'width': '59px',
    'height': '120px',
    'border': '0'
  });
};
