var request = require('supertest');

describe('loading express', function () {

  var server;

  beforeEach(function () {
    server = require('../server');
  });

  afterEach(function () {
    server.close();
  });

  it('responds to /', function testRoot(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('responds to /set', function testSet(done) {
    request(server)
      .get('/set')
      .expect(200, done);
  });

  it('responds to /set?something=somevalue', function testSet(done) {
    request(server)
      .get('/set?something=somevalue')
      .expect('somevalue', done);
  });

  it('404 everything else', function testErrorPath(done) {
    request(server)
      .get('/nothingToSeeHere')
      .expect(404, done);
  });

});
