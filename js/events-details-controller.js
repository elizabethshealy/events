app.router.route('events/:id/details', function (id) {

  var event = app.events.getById(id);

  if (!event) {
    app.show('404', { url: location.hash });
    return;
  }

  // app.show('event-edit', {
  //   event: event,
  //   title: 'Edit Event',
  //   isDeletable: true
  // });


});
