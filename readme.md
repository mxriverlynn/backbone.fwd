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

### Configuring Prefix / Suffix

You can configure an event name prefix and suffix for the forwarded
events, using the `prexix` and `suffix` values in a second
parameter passed to the `fwd` call. The prefix and suffix will be 
prepended / appended with a ":".

```js
var M = Backbone.Model.extend({
  fwd: Backbone.fwd
});

var parent = new M();
var child = new Backbone.Model();

// configure fowarding with a prefix and suffix
parent.fwd(child, {
  prefix: "pre",
  suffix: "post"
});

// handle the event w/ the pre/suffix name
parent.on("pre:name:post", function(){
  // do stuff here
});

// trigger the event. the prefix and suffix
// will be added automatically
child.trigger("name");
```

In this example, the child object triggers a "name" event, but the parent
event handler looks for a "pre:name:post" event because of the specified
prefix and suffix.

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
