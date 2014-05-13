# backbone.fwd

Forward events from one Backbone object, through another. 

## Using backbone.fwd

Call the `.fwd` on a target object, passing a source object as
a parameter. For example, if you want to have a parent `Model` forward all 
events form a child `Model`, you would set it up like this:

```js
// set up the parent with forwarding
var parent = new Backbone.Model();
parent.fwd = backbone.fwd;

// set up a child
var child = new Backbone.Model();

// forward all child evens through the parent
parent.fwd(child);


// handle the "foo" event, which will be
// triggered from the child model
parent.on("foo", function(bar){
  console.log(bar);
});

// trigger the "foo" event from the child and
// watch the parent handle it
child.trigger("foo", "baz");
```

This will forward all events from `child`, through `parent`.

### Attached .fwd vs .call/.apply

The `.fwd` method can either be used with `.call/.apply`, or attached to an 
object that wants to have the method available. It can also be attached to
object definitions.

```js
// attach fwd to object definition / prototype
var MyView = Backbone.View.extend({
  fwd: backbone.fwd
});

// attach fwd to object instance
var m = new Backbone.Model();
m.fwd = backbone.fwd;

// .apply or .call on parent
var parent = new Backbone.Model();
var children = new Backbone.Collection();
backone.fwd.apply(parent, children);
```

## Copyright & License

Copyright &copy;2014 Muted Solutions, LLC. All Rights Reserved.

Distributed under [MIT license](http://mutedsolutions.mit-license.org).
