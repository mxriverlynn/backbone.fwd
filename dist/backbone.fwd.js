// backbone.fwd
// ------------
// Forward events from a source, through a target object
// 
// v0.1.0
// Copyright (C)2014 Muted Solutions, LLC.
// Distributed under MIT license
// 
// https://github.com/derickbailey/backbone.fwd

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
  }, this);
};
