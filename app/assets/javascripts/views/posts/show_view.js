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
  	alertify.success("Successfully applied to be an interviewer");
  }
});
