views.UsersShowView = Backbone.View.extend({
  template: JST["templates/users/show"],
  initialize: function() {
    this.render();  	
  },
  render: function() {
  	this.$el.html(this.template({user: this.model}));
  }
});
