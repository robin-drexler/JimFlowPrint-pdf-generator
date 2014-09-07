var proxyquire = require('proxyquire');
var sinon = require('sinon');

var integrationTestSetup = require('./setup').setup;
var pdfGenerator = require('../pdf_generator');

var config = require('../config');
var http = require('http');

var expect = require('chai').expect;
var fs = require('fs');
var mime = require('mime');


describe('pdf generation', function () {
  it('creates a pdf on disk and calls callback with path', function (done) {
    pdfGenerator.renderTicketPdfToTmp('<h1>', '', function (path) {
      try {
        expect(fs.existsSync(path)).to.be.true;
        expect(mime.lookup(path)).to.equal('application/pdf');
        done();
      } catch(e) {
        done(e);
      } finally {
        fs.unlinkSync(path);
      }
    });
  });
});

describe('pdf api', function () {
  before(integrationTestSetup.start.bind(integrationTestSetup));
  after(integrationTestSetup.done.bind(integrationTestSetup));

  it('responds with pdf', function (done) {
    http.get(config.base_url + '/pdf', function (res) {

      try {
        expect(res.statusCode).to.equal(200);
        expect(res.headers['content-type']).to.equal('application/pdf');
        done();
      } catch (e) {
        done(e);
      }
    })
  });

  it('uses ticket renderer to retreive ticket markup', function (done) {
    http.get(config.base_url + '/pdf', function (res) {

      try {
        expect(res.statusCode).to.equal(200);
        expect(res.headers['content-type']).to.equal('application/pdf');
        done();
      } catch (e) {
        done(e);
      }
    })
  });

});