Journal.Views.PostIndex = Backbone.View.extend({
	template: JST['posts/index'],
	
	initialize: function(options) {
		this.listenTo(this.collection, "add change:title remove reset", this.render);
	},
	
	render: function() {
		var renderedContent = this.template({
			title: "Journal Posts",
			posts: this.collection
		});
		
		this.$el.html(renderedContent);
		return this;
	}
});