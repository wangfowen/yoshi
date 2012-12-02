views.PostsShowView = Backbone.View.extend({
  template: JST["templates/posts/show"],
  events: {
  	'click #apply': 'apply',
    'click #show_user': 'showUser',
    'click .accept': 'acceptApplicant',
    'click .show_evaluation': 'showEvaluation'
  },
  initialize: function() {
    var that = this,
        applications = new collections.Applications({postId: this.model.get("id")});

    applications.fetch({
      success: function() {
        that.render(applications);
      }
    })
  },
  render: function(applications) {
  	this.$el.html(this.template({post: this.model, applications: applications}));
  }, 
  apply: function() {
    if (current_user) {
      var application = new models.Application();

      application.set({
        application: {
          post_id: this.model.get("id")
        }
      });

      application.save({}, {
        success: function() {
          alertify.success("Successfully applied to be an interviewer");
        },
        error: function() {
          alertify.error("Application failed");
        }
      });
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
  },
  acceptApplicant: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var id = $(e.target).data('application'),
        booking = new models.Booking();

    booking.set({
      booking: {
        application_id: id
      }
    });

    booking.save({}, {
      success: function() {
        alertify.success("Successfully accepted applicant");
      }
    });
  },
  showEvaluation: function(e) {
    var id = $(e.target).data('application')
    evaluation = new models.Evaluation({ _post_id: id});
    evaluation.fetch({
      success: function() {
        console.log("success");
        //if (evaluation.get("id") !== undefined) {
          new views.EvaluationsShowView({el: "#content", model: evaluation});
          //window.location.href = "evaluations/" + evaluation.get("id");
        //} else {
          //alertify.error("Error fetching evaluation. No Evaluations available for this posting");
        //}
      },
      error: function() {
        alertify.error("Error fetching evaluation");
      }
    })
  }
});
