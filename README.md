backbone-css3loader
========================

Example usage within a Backbone.js view:

			var view = this;
			view.loader = new LoaderView({
				'el': view.$el
			});

			view.bind('some_event', view.loader.remove);

Template:

            <script type="text/template" id="template_loader">
                <div class="loader <%= className %>">
                    <div class="bar0"></div>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    <div class="bar4"></div>
                    <div class="bar5"></div>
                    <div class="bar6"></div>
                    <div class="bar7"></div>
                    <div class="bar8"></div>
                    <div class="bar9"></div>
                    <div class="bar10"></div>
                    <div class="bar11"></div>
                </div>
            </script>