views.PostsNewView = Backbone.View.extend({
  template: JST["templates/posts/new"],
  initialize: function() {
	this.render();  	
  },
  render: function() {
  	this.$el.html(this.template());
  }
});
