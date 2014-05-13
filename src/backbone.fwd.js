Backbone.fwd = function(source){
  this.listenTo(source, "all", function(){
    var args = Array.prototype.slice.call(arguments);
    this.trigger.apply(this, args);
  }, this);
};
