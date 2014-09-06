var assert = require("assert");
var jsdom = require('jsdom');
var testSetup = require('./setup').setup;

describe('Array', function(){
  describe('#indexOf()', function() {
    it('contain ticket data in view', function (done) {
      testSetup.start(function() {

        jsdom.env({
          url: 'http://localhost:3000/template',
          done: function(err, window) {
            console.log(window.document.querySelector('h1').innerHTML);
            testSetup.done(done);
          }
        });
      });
    });
  })
});