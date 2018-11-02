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

  it('responds to /set', function testSet(done) {
    request(server)
      .get('/set')
      .expect(200, done);
  });

  it('responds to /get', function testGet(done) {
    request(server)
      .get('/get')
      .expect(200, done);
  });

  it('responds to /set?data=bigData', function testSetData(done) {
    request(server)
      .get('/set')
      .query({ data: 'bigData' })
      .expect(200, done);
  });

  it('responds to /get?key=data', function testGetData(done) {
    var agent = request(server)
      agent.get('/set').query({ data: 'bigData' }).end(function() {
        agent.get('/get').query({ key: "data"})
          .expect(200, done);
      })
  });

  it('404 everything else', function testErrorPath(done) {
    request(server)
      .get('/nothingToSeeHere')
      .expect(404, done);
  });

});
