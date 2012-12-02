collections.Posts = Backbone.Collection.extend({
	initialize: function(options) {
		this.current = options.current;
	},
	url: function() {
		if (this.current == true) {
			return '/my_posts';
		} else {
			return '/posts';
		}
	},
	getCategory: function(category) {
		switch(category) {
			case 2:
				return "Business";
				break;
			default:
				return "IT";
				break;
		}
	}
});