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
    if (current_user) {
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
        candidate_email: $('#candidate_email').val(),
    		deadline: new Date($('#deadline').val()),
        user_id: current_user.get("_id")
      }
  	});

      this.model.save({}, {
        success: function() {
          window.location = "/my_posts?success=1";
        },
        error: function() {
          alertify.error("An error occurred when saving");
        }
      });
    }
    else {
      alertify.error("Please sign in first before posting");
    } 
  }
});
