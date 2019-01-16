describe('Server', () => {

  it('responds to /set', () => {
    cy.request('http://localhost:4000/set')
      .then((response) => {
        expect(response.status).to.eq(200)
      });
  });

  it('add a cookie through query', () => {
    cy.request('http://localhost:4000/')
      .clearCookies()

    cy.request('http://localhost:4000/set?exampleKey2=exampleValue2')
      .getCookie('cookieName')
      .should('have.property', 'value', '%7B%22exampleKey2%22%3A%22exampleValue2%22%7D')
  });

  it('returns the cookie in JSON format', () => {
    cy.request('http://localhost:4000/set?exampleKey=exampleValue')
    cy.request('http://localhost:4000/')
      .its('body').should('include', '{\\"exampleKey\\":\\"exampleValue\\"}') // true
  })

  it('404 everything else', () => {
    cy.request({url: 'http://localhost:4000/nothingToSeeHere',
                failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.eq(404)
      });
  });

});
