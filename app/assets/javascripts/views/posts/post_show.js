Journal.Views.PostShow = Backbone.View.extend({
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
	
	changeToTextBox: function(event) {
		var data = $(event.currentTarget)
		var text = data.text();
		var klass = data.context.className;
		
		$("." + klass).html("<textarea name=\"post[" + klass + "]\">" + 
														text + "</textarea>");
	},
	
	editPost: function(event) {
		var newAttribute = $(event.target).serializeJSON();
		var key = Object.keys(newAttribute.post)[0];
		var post = this.model.set(newAttribute);
		
		post.save({}, {
      success: function () {
				$("."+ key).html(newAttribute.post[key]);
      },
			
			error: function(model, response) {
				$("div .errors").append(response.responseJSON);
			}
		});
	}
});