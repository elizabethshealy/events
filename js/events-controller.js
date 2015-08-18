(function () {
  // When the url is #events, this is a constructor (app.object.constructor)
  app.router.route('events', eventListController);

  // When the url is empty (the default route)
  app.router.route('', eventListController);

  // The event list "controller" function
  function eventListController () {
    app.show('event-list', { events: app.events });
  }
})();
