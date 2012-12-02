collections.Applications = Backbone.Collection.extend({
	initialize: function(options) {
		this.current = options.current;
	},
	url: function() {
		if (this.current == true) {
			return '/my_interviews';
		} else {
			return '/applications';
		}
	}
});