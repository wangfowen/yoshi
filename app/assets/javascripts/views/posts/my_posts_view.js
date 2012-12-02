views.PostsMyPostsView = Backbone.View.extend({
  template: JST["templates/posts/my_posts"],
  events: {
    'click #new_post': 'newPost',
    'click .post': 'showPost'
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
  },
  showPost: function(e) {
    var id = $(e.target).closest('button').data('post'),
        post = new models.Post({_id: id});
    
    post.fetch({
      success: function() {
        new views.PostsShowView({el: "#content", model: post});
      }
    });
  }
});
