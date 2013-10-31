Journal.Views.PostShow = Backbone.View.extend({
	initialize: function (options) {
		this.listenTo(this.model, "remove", function () {
			this.remove();
			Backbone.history.navigate("", {trigger: true});
		});
	},
	
	template: JST['posts/show'],
	
	events: {
		"dblclick .title": "changeToTextBox",
		"dblclick .body": "changeToTextBox",
		"blur textarea": "editPost"
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
		
		return this.$el
	},
	
	changeToTextBox: function(event) {
		var data = $(event.currentTarget)
		var text = data.text();
		var klass = data.context.className;
		
		$("." + klass).html("<textarea name=\"post[" + klass + "]\">" + 
														text + "</textarea>");
	},
	
	editPost: function(event) {
		var that = this;
		var newAttribute = $(event.target).serializeJSON();

		var key = Object.keys(newAttribute.post)[0];
		
		if(newAttribute.post[key].length == 0) {
			this.appendErrors([key + " cannot be blank"]);
			
			return
		}
		
		var post = this.model.set(newAttribute);
		
		post.save({}, {
      success: function () {
				$("div .errors").empty();
				$("."+ key).html(newAttribute.post[key]);
      },
			
			error: function(model, response) {
				that.appendErrors(response.responseJSON);
			}
		});
	}
});