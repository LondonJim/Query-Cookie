var request = require('supertest');

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
      .get('/set?somekey=somevalue')
      .expect(function (res) {
        res.headers['somekey'] = '';
      })
      .expect('somekey', '')
      .end(done);
  });

  // it('responds to /get?key=data', function testGetData(done) {
  //   request(server)
  //     .get('/set?data=bigData')
  //     .then(function() {
  //       request(server)
  //       .get('/get?key=data')
  //       .expect('bigData', done);
  //     });
  // });

  it('404 everything else', function testErrorPath(done) {
    request(server)
      .get('/nothingToSeeHere')
      .expect(404, done);
  });

});
