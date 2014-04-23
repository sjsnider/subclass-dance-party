var FlatSwimmer = function(_top, _left, timeBetweenSteps){
  Fish.call(this, _top, _left, timeBetweenSteps);
  this.$node.addClass('flatSwimmer');
  this.fishClass();
};

FlatSwimmer.prototype = Object.create(Fish.prototype);
FlatSwimmer.prototype.constructor = FlatSwimmer;
FlatSwimmer.prototype.step = function () {
  var self = this;
  Fish.prototype.step.call(self);
  self.$node.animate({left: this._left -Math.random()*300}, 1500,function(){
    $(this).removeClass('flipped');
  });
  self.$node.animate({left: this._left +Math.random()*200}, 1500,function(){
    $(this).addClass('flipped');
  });
};
