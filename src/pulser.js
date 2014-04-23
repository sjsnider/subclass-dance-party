var Pulser = function (_top, _left, timeBetweenSteps) {
  Dancer.call(this, _top, _left, timeBetweenSteps);
  this.$node = $('<span class="pulser"></span>');
  this.$node.css({top: _top,
        left: _left
      });
  this.type = 'pulser';
};

Pulser.prototype = Object.create(Dancer.prototype);
Pulser.prototype.constructor = Pulser;

Pulser.prototype.oldStep = Dancer.prototype.step;

Pulser.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.animate({border: 60}, 6000);
  this.$node.animate({
    height: "250",
    opacity: "toggle"
  }, 1500, "linear");
  this.$node.animate({
    height: "50",
    opacity: "toggle"
  }, 1500, "linear");
  // this.$node.fadeToggle();
  // this.$node.animate({border: '30px solid orange'});
};

