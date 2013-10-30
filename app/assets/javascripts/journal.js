window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		Journal.posts = new Journal.Collections.Posts();
		
		Journal.posts.fetch();
		
		indexView = new Journal.Views.PostIndex({
			collection: Journal.posts
		});

		indexView.render();
		$("body").html(indexView.$el);
  }
};

$(document).ready(function(){
  Journal.initialize();
});
