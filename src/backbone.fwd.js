Backbone.fwd = function(source, options){
  options = options || {};

  this.listenTo(source, "all", function(){
    var args = Array.prototype.slice.call(arguments);

    // handle prefix for event name
    var eventName = args.shift();
    if (options.prefix){
      eventName = options.prefix + ":" + eventName;
    }
    args.unshift(eventName);

    this.trigger.apply(this, args);
  }, this);
};
