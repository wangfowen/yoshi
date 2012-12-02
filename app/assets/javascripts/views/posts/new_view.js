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

  	$('#deadline').datepicker().on('changeDate', function(e){
      $('.datepicker').hide();
    });
  
  },
  createPost: function(e) {
  	e.stopPropagation();
  	e.preventDefault();

  	var $spinner = $('.spinner');

  	$spinner.css("display", "inline-block");

  	this.model.set({
      post: {
    		title: $('#title').val(),
    		category: $('#category').val(),
    		description: $('#description').val(),
    		candidate_name: $('#candidate_name').val(),
    		deadline: $('#deadline').val()
      }
  	});

  	this.model.save({}, {
  		success: function() {
  			window.location = "/?success=1";
  		},
  		error: function() {
  			alertify.error("An error occurred when saving");
  		}
  	});
  }
});
