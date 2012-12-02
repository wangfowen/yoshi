views.PostsMyPostsView = Backbone.View.extend({
  template: JST["templates/posts/my_posts"],
  events: {
    'click #new_post': 'newPost'
  },
  initialize: function() {
    this.render();	
  },
  render: function() {
  	this.$el.html(this.template({posts: this.collection}));
  	if ($.url().param('success') == 1) {
  		alertify.success( "Post successfully created");
  	}
  },
  newPost: function(e) {
    window.location.href = "posts/new";
  }
});
