odoo.define("exo_website.actor_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

  var ActorsTable = require
  console.log('app');
  sAnimation.registry.actor_app = Widget.extend({
    selector: ".app-actor",

    start: function () {
      this._super.apply(this, arguments);
      console.log('app start');
    },
  });
});
