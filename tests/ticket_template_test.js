var jsdom = require('jsdom');
var expect = require('chai').expect;
var app = require('../app').app;

var TICKET_VIEW = 'ticket';
var testSetup = require('./setup').setup;
queryString = require('querystring');

describe('ticket view', function () {

  after(testSetup.done.bind(testSetup));
  before(testSetup.start.bind(testSetup));

  it('contains ticket data in view', function (done) {
    var expectedData = {
      id: '12',
      type: 'feature',
      reporter: 'Werner',
      title: 'Text is good!',
      repo: 'doo/bar'
    };
    var query = queryString.stringify(expectedData);

    jsdom.env({
      url: 'http://localhost:3000/A6_template?' + query,
      done: function (err, window) {
        try {
          var querySelector = window.document.querySelector.bind(window.document);

          expect(querySelector('.ticket-id').innerHTML).to.have.string(expectedData.id);
          expect(querySelector('.ticket-reporter').innerHTML).to.have.string(expectedData.reporter);

    app.render(TICKET_VIEW, {
      ticket: expectedData
    }, function (err, html) {
      console.log(err);
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
            // an element has class named like type
            expect(querySelector('.' + expectedData.type)).not.to.be.null;
            done(e);
        } catch (e) {
          done(e);
        }
      }
    });
  });

  it('does not contain repo, if there is none set', function (done) {
    jsdom.env({
      url: 'http://localhost:3000/A6_template?',
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