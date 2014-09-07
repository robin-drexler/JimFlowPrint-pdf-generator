var jsdom = require('jsdom');
var expect = require('chai').expect;
queryString = require('querystring');

var ticketRenderer = require('../ticket_renderer');
var app = require('../app').app;


describe('ticket view', function () {

  it('contains ticket data in view', function (done) {
    var expectedData = {
      id: '12',
      type: 'feature',
      reporter: 'Werner',
      title: 'Text is good!',
      repo: 'doo/bar'
    };
    var req = {
      query: expectedData
    };

    var query = queryString.stringify(expectedData);

    ticketRenderer.renderTicket(req, app, function (err, html) {
      jsdom.env({
        html: html,
        done: function (err, window) {
          try {
            var querySelector = window.document.querySelector.bind(window.document);

            expect(querySelector('.ticket-id').innerHTML).to.have.string(expectedData.id);
            expect(querySelector('.ticket-reporter').innerHTML).to.have.string(expectedData.reporter);

            // an element has class named like type
            expect(querySelector('.' + expectedData.type)).not.to.be.null;
            expect(querySelector('.ticket-title').innerHTML).to.have.string(expectedData.title);
            expect(querySelector('.ticket-repo').innerHTML).to.have.string(expectedData.repo);
            done();

          } catch (e) {
            done(e);
          }
        }
      });
    });
  });

  it('does not contain repo, if there is none set', function (done) {
    var req = {
      query: {}
    };
    ticketRenderer.renderTicket(req, app, function (err, html) {
      jsdom.env({
        html: html,
        done: function (err, window) {
          try {
            var querySelector = window.document.querySelector.bind(window.document);
            expect(querySelector('.ticket-repo')).to.be.null;
            done();

          } catch (e) {
            done(e);
          }
        }
      });
    });
  });
});