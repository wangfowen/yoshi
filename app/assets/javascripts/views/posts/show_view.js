views.PostsShowView = Backbone.View.extend({
  template: JST["templates/posts/show"],
  events: {
  	'click #apply': 'apply'
  },
  initialize: function() {
	this.render();  	
  },
  render: function() {
  	this.$el.html(this.template({post: this.model}));
  }, 
  apply: function() {
    if (true) {
  	 alertify.success("Successfully applied to be an interviewer");
    }
    else {
      alertify.error("Please sign in before applying to be an interviewer");
    }
  }
});
