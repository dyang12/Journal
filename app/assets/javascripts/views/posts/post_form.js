Journal.Views.PostForm = Backbone.View.extend({
	template: JST["posts/form"],
	
	events: {
		"submit form": "submitForm"
	},
	
	render: function() {
		var renderedContent = this.template({
			post: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	submitForm: function(event) {
		event.preventDefault();
		
		var that = this;
		var data = $(event.currentTarget).serializeJSON();
		var post = this.model.set(data.post);
		
		if(post.isNew()) {
	    post.save({}, {
	      success: function () {
	        that.collection.add(post);
	      },

				error: function(model, response) {
					debugger
				}
	    });
			
			Backbone.history.navigate("", {trigger: true});
		}
		else {
			post.save({}, {
				success: function() {
					Backbone.history.navigate("", {trigger: true});
				},
				
				error: function(model, response) {
				debugger	
				}
			});
		}
	}
})