models.Post = Backbone.Model.extend({
	url: function() {
		var url = this.collection.url(true);

		if (!this.isNew()) {
			url = url + '/' + this.get("postId");
		}
		
		return url;
	}
});