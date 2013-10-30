Journal.AppRouter = Backbone.Router.extend({
	routes: {
		"": "showPostIndex",
		"posts/:id": "showPostDetail"
	},
	
	showPostIndex: function() {
		var indexView = new Journal.Views.PostIndex({
			collection: Journal.posts
		});

		$("body").html(indexView.render().$el);
	},
	
	showPostDetail: function(id) {
		console.log(Journal.posts.get(id))
		var detailView = new Journal.Views.PostShow({
			model: Journal.posts.get(id)
		});
		
		$("body").html(detailView.render().$el);
	}
});