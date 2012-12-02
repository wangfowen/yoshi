models.Post = Backbone.Model.extend({
	url: function() {
		var url = '/posts';

		if (this.isNew() && this.get("_id") !== undefined) {
			url = url + '/' + this.get("_id");
		}
		
		return url;
	},

	getCategory: function() {
		switch(this.get("category")) {
			case 2:
				return "Business";
				break;
			default:
				return "IT";
				break;
		}
	}
});