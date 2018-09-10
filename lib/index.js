'use strict';

/* global Demo */

(function(plugins) {
  function DemoPlugin() {
    console.log("Yay plugin!");
    console.log("modificacion arbitraria desde el plugin");
    console.log("modificacion arbitraria desde el plugin 2");
  }

  plugins.register(DemoPlugin);
})(Demo.plugins);
