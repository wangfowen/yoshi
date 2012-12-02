views.PostsShowView = Backbone.View.extend({
  template: JST["templates/posts/show"],
  events: {
  	'click #apply': 'apply',
    'click #show_user': 'showUser'
  },
  initialize: function() {
	this.render();  	
  },
  render: function() {
  	this.$el.html(this.template({post: this.model}));
  }, 
  apply: function() {
    if (current_user) {
  	 alertify.success("Successfully applied to be an interviewer");
    }
    else {
      alertify.error("Please sign in before applying to be an interviewer");
    }
  },
  showUser: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var user = new models.User({_id: $(e.target).closest('#show_user').data('user')});
    user.fetch({
      success: function() {
        new views.UsersShowView({el: "#content", model: user});
      }
    });
  }
});
