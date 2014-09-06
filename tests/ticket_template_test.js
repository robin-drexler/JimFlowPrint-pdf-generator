var jsdom = require('jsdom');
var expect = require('chai').expect;
var app = require('../app').app;

describe('ticket view', function () {

  it('contains ticket data in view', function (done) {
    var expectedData = {
      id: '12',
      type: 'feature',
      reporter: 'Werner',
      title: 'Text is good!'
    };


    app.render('ticket', {
      ticket: expectedData
    }, function (err, html) {
      jsdom.env({
        html: html,
        done: function (err, window) {
          var querySelector = window.document.querySelector.bind(window.document);

          expect(querySelector('.ticket-id').innerHTML).to.have.string(expectedData.id);
          expect(querySelector('.ticket-reporter').innerHTML).to.have.string(expectedData.reporter);
          // type has become an icon, need to test for background-image of content::before
          // expect(querySelector('.ticket-type').innerHTML).to.have.string(expectedData.type);
          expect(querySelector('.ticket-title').innerHTML).to.have.string(expectedData.title);

          done();
        }
      });
    });
  });
});