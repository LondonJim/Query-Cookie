describe('Server', () => {

  it('responds to /get', () => {
    cy.request('http://localhost:4000/set')
      .then((response) => {
        expect(response.status).to.eq(200)
      });
  });

  it('responds to/set', () => {
    cy.request('http://localhost:4000/get')
      .then((response) => {
        expect(response.status).to.eq(200)
      });
  });

  it('404 everything else', () => {
    cy.request({url: 'http://localhost:4000/nothingToSeeHere',
                failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.eq(404)
      });
  });

  it('returns the value of a defined key', () => {
    cy.request('http://localhost:4000/set?someKey=someValue')
    cy.visit('http://localhost:4000/get?key=someKey')
    cy.contains('someValue')
  })

  it('sets a session cookie', () => {
    cy.request('http://localhost:4000/set?newKey=newValue')
      .getCookies()
      .should('have.length', (1))
      .then((cookies) => {
        expect(cookies[0]).to.have.property('name', 'connect.sid')
      });
  })
});
