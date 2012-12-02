views.EvaluationsShowView = Backbone.View.extend({
  template: JST["templates/evaluations/show"],
  events: {
    'click #show_user': 'showUser'
  },
  initialize: function() {
	  this.render();
  },
  render: function() {
    console.log(this.model);
  	this.$el.html(this.template({evaluation: this.model}));
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
