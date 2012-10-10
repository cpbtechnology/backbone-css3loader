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
            <% for ( var i = 0; i <= 11; i++ ) { %>
                <div class="bar<%= i %>"></div>
            <% } %>
        </div>
    </script>