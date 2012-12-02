views.PostsIndexView = Backbone.View.extend({
  template: JST["templates/posts/index"],
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
    if (true) {
      window.location.href = "posts/new";
    }
    else {
      e.stopPropagation();
      e.preventDefault();
      alertify.error("Please Sign in first before posting a new interview");
    }
  }
});
