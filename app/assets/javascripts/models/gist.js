GistClone.Models.Gist = Backbone.Model.extend({
  urlRoot: "/gists",

  initialize: function(response) {
    this.attributes = this.parse(response);
  },

  toJSON: function() {
    var attributes = _.clone(this.attributes);
    $.each(attributes, function(key, value) {
      if (key === 'favorite') {
        delete attributes[key];
      }
    });
    return attributes;
  }
});