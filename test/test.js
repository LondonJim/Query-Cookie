var request = require('supertest');
var async = require('async');

describe('loading express', function () {

  var server;

  beforeEach(function () {
    server = require('../server');
  });

  afterEach(function () {
    server.close();
  });

  it('responds to /', function testGet(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('responds to /set?data=bigData', function testSetData(done) {
    request(server)
      .get('/set')
      .query({ data: 'bigData' })
      .expect(200, done);
  });

  it('404 everything else', function testErrorPath(done) {
    request(server)
      .get('/nothingToSeeHere')
      .expect(404, done);
  });

});
