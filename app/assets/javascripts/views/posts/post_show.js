Journal.Views.PostShow = Backbone.View.extend({
	template: JST['posts/show'],
	
	render: function() {
		var renderedContent = this.template({
			title: "Journal Entry",
			post: this.model
		});
	}
});