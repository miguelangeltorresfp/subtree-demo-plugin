'use strict';

/* global Demo */

(function(plugins) {
  function DemoPlugin() {
    console.log("Yay plugin!");
    console.log("modificacion arbitraria desde el plugin");
  }

  plugins.register(DemoPlugin);
})(Demo.plugins);
