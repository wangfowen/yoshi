views.PostsIndexView = Backbone.View.extend({
  template: JST["templates/posts/index"],
  initialize: function() {
	this.render();	
  },
  render: function() {
  	this.$el.html(this.template({posts: this.collection}));
  }
});
