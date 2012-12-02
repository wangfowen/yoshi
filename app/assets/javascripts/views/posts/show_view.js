views.PostsShowView = Backbone.View.extend({
  template: JST["templates/posts/show"],
  initialize: function() {
	this.render();  	
  },
  render: function() {
  	this.$el.html(this.template({post: this.model}));
  }
});
