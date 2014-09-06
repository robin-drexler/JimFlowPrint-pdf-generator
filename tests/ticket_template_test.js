var assert = require("assert");
var jsdom = require('jsdom');
var testSetup = require('./setup').setup;
var expect = require('chai').expect;

describe('ticket view', function () {

  afterEach(testSetup.done.bind(testSetup));
  beforeEach(testSetup.start.bind(testSetup));

  it('contains ticket data in view', function (done) {
    var expectedData = {
      id: '12',
      type: 'feature',
      reporter: 'Werner',
      text: 'Text is good!'
    };
    var query = '?';

    // naively build query string
    for (var key in expectedData) {
      query += key + '=' + expectedData[key] + '&';
    }

    jsdom.env({
      url: 'http://localhost:3000/template' + query,
      done: function (err, window) {
        var querySelector = window.document.querySelector.bind(window.document);

        expect(querySelector('.ticket-id').innerHTML).to.have.string(expectedData.id);
        expect(querySelector('.ticket-reporter').innerHTML).to.have.string(expectedData.reporter);
        expect(querySelector('.ticket-type').innerHTML).to.have.string(expectedData.type);
        expect(querySelector('.ticket-text').innerHTML).to.have.string(expectedData.text);

        done();
      }
    });
  });
});