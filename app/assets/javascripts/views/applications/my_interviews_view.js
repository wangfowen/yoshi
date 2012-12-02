views.ApplicationsMyInterviewsView = Backbone.View.extend({
  template: JST["templates/applications/my_interviews"],
  initialize: function() {
    this.render();	
  },
  render: function() {
  	this.$el.html(this.template({applications: this.collection}));
  }
});
