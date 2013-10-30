Journal.AppRouter = Backbone.Router.extend({
	routes: {
		"": "showPostIndex",
		"posts/new" : "showNewPost",
		"posts/:id": "showPostDetail",
		"posts/:id/edit": "showEditPost"
	},
	
	showPostIndex: function() {
		var indexView = new Journal.Views.PostIndex({
			collection: Journal.posts
		});

		$(".sidebar").html(indexView.render().$el);
		$(".content").empty();
	},
	
	showPostDetail: function(id) {
		this.showPostIndex();
		var detailView = new Journal.Views.PostShow({
			model: Journal.posts.get(id)
		});
		
		$(".content").html(detailView.render().$el);
	},
	
	showEditPost: function(id) {
		this.showPostIndex();
		var formView = new Journal.Views.PostForm({
			model: Journal.posts.get(id)
		});
		
		$(".content").html(formView.render().$el)
	},
	
	showNewPost: function() {
		this.showPostIndex();
		var post = new Journal.Models.Post();
		var formView = new Journal.Views.PostForm({
			model: post,
			collection: Journal.posts
		});
		
		$(".content").html(formView.render().$el)
	}
});