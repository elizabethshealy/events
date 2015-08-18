//_template makes the template. ID selector, then grabbing the HTML (all line 5)
//Then binds the modal to the template in line 4

app.show = function (templateId, model) {
  var templateHtml = $('#' + templateId).html();
  var templateFn = _.template(templateHtml, { variable: 'm' });
  var result = templateFn(model);

  $('.main-content').html(result);
};
