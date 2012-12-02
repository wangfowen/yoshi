models.Booking = Backbone.Model.extend({
	url: function() {
		var url = '/bookings';

		if (this.isNew() && this.get("_id") !== undefined) {
			url = url + '/' + this.get("_id");
		}
		
		return url;
	}
});