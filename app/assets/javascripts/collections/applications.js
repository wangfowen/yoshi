collections.Applications = Backbone.Collection.extend({
	url: function() {
		if (this.current == true) {
			return '/my_interviews';
		} else {
			return '/applications';
		}
	}
});