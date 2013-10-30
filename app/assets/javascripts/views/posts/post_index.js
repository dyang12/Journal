Journal.Views.PostIndex = Backbone.View.extend({
	template: JST['posts/index'],
	
	initialize: function(options) {
		this.listenTo(this.collection, "add change:title remove reset", this.render);
	},
	
	events: {
		"click .delete" : "deletePost"
	},
	
	deletePost: function(event) {
		event.preventDefault();
		var id = parseInt($(event.target).attr("data-id"));
		var post = this.collection.get(id);
		post.destroy();
	},
	
	render: function() {
		var renderedContent = this.template({
			title: "Journal Posts",
			posts: this.collection
		});
		
		this.$el.html(renderedContent);
		this.$el.prepend("<a href=\"#/posts/new\">New Post</a>");
		return this;
	}
});