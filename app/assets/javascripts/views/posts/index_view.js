views.PostsIndexView = Backbone.View.extend({
  template: JST["templates/posts/index"],
  events: {
    'click #new_post': 'newPost',
    'click .post': 'showPost'
  },
  initialize: function() {
    this.render();	
  },
  render: function() {
  	this.$el.html(this.template({posts: this.collection}));
  },
  newPost: function(e) {
    if (current_user) {
      window.location.href = "posts/new";
    }
    else {
      e.stopPropagation();
      e.preventDefault();
      alertify.error("Please sign in first before posting a new interview");
    }
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
