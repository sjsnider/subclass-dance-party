// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this._top, this._left);
};

  Dancer.prototype.step = function(){
    var bind = function(fn, context){
      return function(){
        fn.call(context);
      };
    };
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    // setTimeout.call(that, that.step, that._timeBetweenSteps);
    setTimeout(bind(that.step, that), that._timeBetweenSteps);
  };

// unsure about arguments
  Dancer.prototype.setPosition = function(_top, _left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: _top,
      left: _left
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.lineup = function (newLeft) {
    this._left = newLeft;
    this.setPosition(this._top, newLeft);
  };

