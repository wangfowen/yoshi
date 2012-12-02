models.Evaluation = Backbone.Model.extend({
	url: function() {
		var url = '/evaluations';

		if (this.isNew() && this.get("_id") !== undefined) {
			url = url + '/' + this.get("_id");
		}
		else if (this.get("_post_id") !== undefined) {
			if (this.get("_id") !== undefined) {
				url = "/posts/" + this.get("_post_id") + "/evaluations/" + this.get("_id");
			}
		}
		
		return url;
	}
});