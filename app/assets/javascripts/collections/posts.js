collections.Posts = Backbone.Collection.extend({
	url: '/posts',
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