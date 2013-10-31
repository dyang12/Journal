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
	
	appendErrors: function(errors) {
		$("div .errors").empty();
		errors.forEach(function(error) {
			$("div .errors").append("<div>" + error + "</div>");
		});
	},
	
	submitForm: function(event) {
		event.preventDefault();
		
		var that = this;
		var data = $(event.currentTarget).serializeJSON();
		var post = this.model.set(data.post);
		
		if (!post.isValid()) {
			this.appendErrors(post.validationError);
			return;
		}
		
		if(post.isNew()) {
	    post.save({}, {
	      success: function () {
	        that.collection.add(post);
			
					Backbone.history.navigate("", {trigger: true});
	      },

				error: function(model, response) {
					that.appendErrors(response.responseJSON);
				}
	    });
		}
		else {
			post.save({}, {
	      success: function () {
					Backbone.history.navigate("", {trigger: true});
	      },
				
				error: function(model, response) {
					$("div .errors").append(response.responseJSON);
				}
			});
		}
	}
})