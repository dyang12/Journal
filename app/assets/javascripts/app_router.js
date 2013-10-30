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

		$("body").html(indexView.render().$el);
	},
	
	showPostDetail: function(id) {
		var detailView = new Journal.Views.PostShow({
			model: Journal.posts.get(id)
		});
		
		$("body").html(detailView.render().$el);
	},
	
	showEditPost: function(id) {
		var formView = new Journal.Views.PostForm({
			model: Journal.posts.get(id)
		});
		
		$("body").html(formView.render().$el)
	},
	
	showNewPost: function() {
		var post = new Journal.Models.Post();
		debugger
		var formView = new Journal.Views.PostForm({
			model: post
		});
		
		$("body").html(formView.render().$el)
	}
});