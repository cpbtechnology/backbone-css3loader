var LoaderView = Backbone.View.extend({
	'defaults': {
		'templateID': 'template_loader',
		'supportsCSS3': false,
		'loaderClassName': 'loader_css3'
	},
	'initialize': function(options) {
		var view = this;
		view.o = $.extend(true, view.defaults, options);
		view.o.supportsCSS3 = (App.Utilities.supportsCss3('-webkit-transform') && App.Utilities.supportsCss3('-webkit-animation')); //replace with your own detection method
		view.render();
	},
	'render': function() {
		var view = this;
		if (!view.o.supportsCSS3) {
			view.o.loaderClassName = 'loader_graphic';
		}
		var loaderHTML = _.template($('#' + view.o.templateID).html(), {
			'className': view.o.loaderClassName
		});
		view.$el.prepend(loaderHTML);
	},
	'remove': function() {
		var view = this;
		view.$el.find('.loader').remove();
	}
});