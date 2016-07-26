var app = app || {};

app.NewView = Backbone.View.extend({

	tagName: 'li',

	className: 'new',

	template: _.template( $('#new-template').html() ),

	events: {
		'click .likes': 'addLike',
		'click .delete': 'delete'
	},

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.$likes = this.$('.likes');
		this.$delete = this.$('.delete');
		this.$likeAmount = this.$('.likes span');
		return this;
	},

	addLike: function(){
		var likes = this.model.get('likes');
		this.model.set('likes', likes + 1);
		this.render().el;
		this.model.save({
			likes: likes + 1
		})
	},

	delete: function(){
		this.model.destroy();
	}

});