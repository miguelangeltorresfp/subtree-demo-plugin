'use strict';

/* global Demo */

(function(plugins) {
  function DemoPlugin() {
    console.log("Yay plugin!");
  }

  plugins.register(DemoPlugin);
})(Demo.plugins);
