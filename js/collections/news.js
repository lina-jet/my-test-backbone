var app = app || {};

var NewList = Backbone.Collection.extend({

	model: app.New,

	localStorage: new Backbone.LocalStorage('new-backbone')

});

app.News = new NewList();