views.PostsNewView = Backbone.View.extend({
  template: JST["templates/posts/new"],
  events: {
  	'click #create_post': 'createPost'
  },
  initialize: function() {
	this.render();  	
  },
  render: function() {
  	this.$el.html(this.template());

  	$('#deadline').datepicker();
  },
  createPost: function(e) {
  	e.stopPropagation();
  	e.preventDefault();

  	var $spinner = $('.spinner');

  	$spinner.css("display", "inline-block");
  }
});
