var Triangle = function (_top, _left, timeBetweenSteps) {
  Dancer.call(this, _top, _left, timeBetweenSteps);
  this.$node = $('<span class="triangle"></span>');
  this.$node.css({top: _top,
        left: _left
      });
  this.type = 'triangle';
};

Triangle.prototype = Object.create(Dancer.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.oldStep = Dancer.prototype.step;

Triangle.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    backgroundColor: '#aa0000',
    width: 500
        }, 1000 );
  this.$node.animate({
    backgroundColor: '#fff',
    width: 240
    }, 500);
};

