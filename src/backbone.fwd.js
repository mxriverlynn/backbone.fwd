Backbone.fwd = function(source, options){
  options = options || {};

  this.listenTo(source, "all", function(){
    var args = Array.prototype.slice.call(arguments);
    var eventName = args.shift();

    // handle prefix for event name
    if (options.prefix){
      eventName = options.prefix + ":" + eventName;
    }

    // handle suffix for event name
    if (options.suffix){
      eventName = eventName + ":" + options.suffix;
    }

    args.unshift(eventName);
    this.trigger.apply(this, args);
  });
};
