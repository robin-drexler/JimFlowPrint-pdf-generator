var express = require('express');
var app = express();
var phantom = require('phantom');
var tmp = require('tmp');
var fs = require('fs');
var config = require('./config');
var pdfGenerator = require('./pdf_generator');
var ticketRenderer = require('./ticket_renderer');

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/views'));

app.get('/template', function (req, res) {
  res.render('ticket', {
    ticket: req.query
  });
});

app.get('/pdf', function (req, res) {
  ticketRenderer.renderTicket(req, app, function (err, html) {
    pdfGenerator.renderTicketPdfToTmp(html, config.base_url, function (path) {
      res.sendFile(path, function () {
        fs.unlinkSync(path);
      });
    });
  });
});


exports.app = app;