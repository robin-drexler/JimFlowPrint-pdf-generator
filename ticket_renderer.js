exports.renderTicket = function(req, app, cb) {
  app.render('ticket', {
    ticket: req.query
  }, function (err, html) {
    cb(err, html);
  });
};
