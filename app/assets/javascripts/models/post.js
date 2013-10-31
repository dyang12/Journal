Journal.Models.Post = Backbone.Model.extend({
	urlRoot: 'posts',
	
	validate: function (attrs, options) {
		var errors = [];
		if(attrs["title"].length == 0) {
			errors.push("Title cannot be blank");
		}
		
		if(attrs["body"].length == 0) {
			errors.push("Body cannot be blank");
		}
		
		return errors.length == 0 ? undefined : errors;
	}
});