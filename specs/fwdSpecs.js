describe("basic event forwarding", function(){
  var M = Backbone.Model.extend({
    fwd: Backbone.fwd
  });

  describe("when a child triggers an event", function(){
    var parent, child, handler;

    beforeEach(function(){
      handler = jasmine.createSpy("event handler");
      child = new Backbone.Model();

      parent = new M();
      parent.fwd(child);
      parent.on("foo", handler);

      child.trigger("foo", "bar");
    });

    it("should forward the event and args through the parent", function(){
      expect(handler).toHaveBeenCalledWith("bar");
    });
  });

  describe("when a parent stops listening to events", function(){
    var parent, child, handler;

    beforeEach(function(){
      handler = jasmine.createSpy("event handler");
      child = new Backbone.Model();

      parent = new M();
      parent.fwd(child);
      parent.on("foo", handler);

      parent.stopListening();
      child.trigger("foo", "bar");
    });

    it("should remove the forwarded event handler, for the child", function(){
      expect(handler).not.toHaveBeenCalled();
    });
  });

});
