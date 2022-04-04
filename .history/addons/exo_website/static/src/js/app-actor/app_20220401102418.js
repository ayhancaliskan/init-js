odoo.define("exo_website.actor_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

  var ActorsTable = require('exo_website.actor_table');
  sAnimation.registry.actor_app = Widget.extend({
    selector: ".app-actor",

    start: function () {
      var objet = new ActorsTable (this)
      objet.appendTo(this.$('.left-zone'))

      this._super.apply(this, arguments);
    },

    _actorPreview: function (ev) {
      console.log('preview');
    }
  });
});