var Scuba = function(_top, _left, timeBetweenSteps){
  Dancer.call(this, _top, _left, timeBetweenSteps);
  this.$node.addClass('scuba');
  this.$node.animate({top: '120%'});
  this.type = 'scuba';
  this.yPos = 90;
  this.step();
};
Scuba.prototype = Object.create(Dancer.prototype);
Scuba.prototype.constructor = Scuba;

Scuba.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.animate({top: this._top + 10});
  this.$node.animate({top: this._top - 10});
  var scubaDepth = this.$node.css('top').split('.');
  if(scubaDepth[0]>800){
    this.$node.removeClass('scuba').addClass('scubaup');
  }
};
