var app = app || {};

app.AppView = Backbone.View.extend({

	el: "#news-app",

	events: {
		'click #add-new' : 'showAddNew',
		'click #add' : 'createNew'
	},

	initialize: function(){
		this.$addButton = this.$('#add-new');
		this.$redactor = this.$('#redactor');
		this.$inputText = this.$('#new-text');
		this.$inputTitle = this.$('#new-title');
		this.$add = this.$('#add');
		this.listenTo(app.News, 'add', this.addOne);
		app.News.fetch();
	},

	showAddNew: function(){
		this.$addButton.toggleClass('clicked');
		if(this.$addButton.hasClass('clicked')){
			this.$redactor.show();
		}else{
			this.$redactor.hide();
		}
	},

	createNew: function(){
		app.News.create( this.newAttributes() );
	},

	newAttributes: function(){
		return {
			title: this.$inputTitle.val().trim(),
			text: this.$inputText.val().trim(),
			likes: 0
		};
	},

	addOne: function( newItem ){
		var view = new app.NewView({ model:newItem });
		$('#news-list').append(view.render().el);
		this.$inputText.val('');
		this.$inputTitle.val('');
		this.showAddNew();
	}

});