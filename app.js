var express = require('express');
var app = express();
app.set('view engine', 'jade');
var fs = require('fs');
var tmp = require('tmp');
var phantom = require('phantom');
var queryString = require('querystring');

app.use(express.static(__dirname + '/views'));

app.get('/template', function (req, res) {
  res.render('ticket', {
    ticket: req.query
  });
});

app.get('/A6_template', function (req, res) {
  res.render('A6_template', {
    ticket: req.query
  });
});


app.get('/pdf', function (req, res) {
  app.render('A6_template', {
    ticket: req.query
  }, function (err, html) {
    tmp.tmpName(function (err, path) {
      path += '.pdf';
      if (err) throw err;

      phantom.create(function (ph) {
        ph.createPage(function (page) {
          page.set('paperSize', {
            width: '148mm',
            height: '105mm',
            orientation: 'landscape'

          }, function () {
            page.open('http://localhost:3000/A6_template?' + queryString.stringify(req.query), function (status) {
              page.render(path, {format: 'pdf'}, function () {
                ph.exit();
                res.sendFile(path)
              });
            });
          });
        });

      });


    });
  });
});


exports.app = app;