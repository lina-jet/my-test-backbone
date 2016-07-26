var app = app || {};

app.New = Backbone.Model.extend({
	defaults: {
		title: '',
		text: '',
		likes: 0
	}
});