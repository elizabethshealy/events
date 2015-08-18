app.router.route('events/:id/edit', function (id) {

  var event = app.events.getById(id);

  if (!event) {
    app.show('404', { url: location.hash });
    return;
  }

  // Render the view
  app.show('event-edit', {
    event: event,
    title: 'Edit Event',
    isDeletable: true
  });

  // Render the template, take the HTML and put it into the DOM
  $('.event-form').parsley();

  $('.event-form').on('submit', function (e) {
    e.preventDefault();

    app.events.update(id, new app.Event(app.serializeForm(this)));

    app.goto('events');
  });

  $('.delete-event').click(function () {
    app.events.remove(id);
    app.goto('events');
  });

});
