describe('API Test', () => {
  it('Validate posts API', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('eq', 200);
  });
});
