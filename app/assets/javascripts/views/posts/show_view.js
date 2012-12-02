views.PostsShowView = Backbone.View.extend({
  template: JST["templates/posts/show"],
  events: {
  	'click #apply': 'apply',
    'click #show_user': 'showUser',
    'click .accept': 'acceptApplicant'
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
          //TODO: rerender home
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
  }
});
