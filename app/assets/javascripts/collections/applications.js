collections.Applications = Backbone.Collection.extend({
	initialize: function(options) {
		this.current = options.current;
		this.postId = options.postId;
	},
	url: function() {
		var url;

		if (this.current == true) {
			return '/my_interviews';
		} else {
			if (this.postId !== undefined) {
				return '/posts/' + this.postId + '/applications';
			} else {
				return '/applications';
			}
		}
	}
});