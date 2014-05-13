describe("prefix and suffix event names", function(){
  var M = Backbone.Model.extend({
    fwd: Backbone.fwd
  });

  describe("when configuring event forwarding with a prefix", function(){
    var parent, child, handler;

    beforeEach(function(){
      handler = jasmine.createSpy("event handler");
      child = new Backbone.Model();
      parent = new M();

      parent.fwd(child, {
        prefix: "pre"
      });

      parent.on("pre:foo", handler);
      child.trigger("foo", "bar");
    });

    it("should forward the event with the specified prefix", function(){
      expect(handler).toHaveBeenCalledWith("bar");
    });
  });

});
