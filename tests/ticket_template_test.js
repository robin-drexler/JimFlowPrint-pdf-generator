var jsdom = require('jsdom');
var expect = require('chai').expect;
var app = require('../app').app;

var TICKET_VIEW = 'A6_template';

describe('ticket view', function () {


  it('contains ticket data in view', function (done) {
    var expectedData = {
      id: '12',
      type: 'feature',
      reporter: 'Werner',
      title: 'Text is good!',
      repo: 'doo/bar'
    };


    app.render(TICKET_VIEW, {
      ticket: expectedData
    }, function (err, html) {
      jsdom.env({
        html: html,
        done: function (err, window) {
          try {
            var querySelector = window.document.querySelector.bind(window.document);
            expect(querySelector('.metadata').innerHTML).to.have.string(expectedData.id);
            expect(querySelector('.ticket-reporter').innerHTML).to.have.string(expectedData.reporter);
            expect(querySelector('.metadata').innerHTML).to.have.string(expectedData.type);
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
    app.render(TICKET_VIEW, {
      ticket: {}
    }, function (err, html) {
      jsdom.env({
        html: html,
        done: function (err, window) {

          try {
            var querySelector = window.document.querySelector.bind(window.document);
            expect(querySelector('.ticket-repo')).to.be.null;
            done();
          } catch (e) {
            console.log(e);
            done(e);
          }

        }
      });
    });
  });
});