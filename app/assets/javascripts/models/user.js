models.User = Backbone.Model.extend({
	url: function() {
		var url = '/users';

		if (this.isNew() && this.get("_id") !== undefined) {
			url = url + '/' + this.get("_id");
		}
		
		return url;
	}
});