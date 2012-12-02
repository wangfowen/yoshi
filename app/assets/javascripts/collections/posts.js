collections.Posts = Backbone.Collection.extend({
	model: models.Post,
	urlRoot: '/posts'
});