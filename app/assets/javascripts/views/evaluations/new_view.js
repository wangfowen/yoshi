views.EvaluationsNewView = Backbone.View.extend({
  template: JST["templates/evaluations/new"],
  events: {
  	'click #create_evaluation': 'createEvaluation'
  },
  initialize: function() {
    console.log(this.model);
    this.render();  	
  },
  render: function() {
  	this.$el.html(this.template());

  },
  createEvaluation: _.once(function(e) {
    if (current_user) {
      e.stopPropagation();
      e.preventDefault();

      var $spinner = $('.spinner');

      $spinner.css("display", "inline-block");

  	this.model.set({
      evaluation: {
    		rating: $('#rating').val(),
    		comments: $('#comments').val(),
    		recommended: $('#recommended').val(),
        evaluator_id: current_user.get("_id"),
        completed: true,
        post_id: this.model.get("_post_id")
      }
  	});

      this.model.save({}, {
        success: function() {
          window.location = "/my_interviews";
        },
        error: function() {
          alertify.error("An error occurred when saving");
        }
      });
    }
    else {
      alertify.error("Please sign in first before posting");
    } 
  })
});
