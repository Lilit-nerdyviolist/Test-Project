describe('Validate functionality of Credit Card of HSBC website', () => {

  beforeEach(() => {
    cy.visit('https://www.hsbc.co.in/');
  })
  it('Credit Card test', () => {
    cy.get('span[class="header-main-navigation-title"]').contains("Banking").click({ force: true });
    cy.get('h2[class="doormat-heading"]').contains("Credit Cards").click()
    cy.wait(20000);
    cy.contains('HSBC Taj Credit Card').click({ force: true });
    cy.wait(15000);
    cy.url().should('include', 'https://www.hsbc.co.in/credit-cards/products/taj/')
    cy.get('h1').contains("HSBC Taj Credit Card").should('be.visible');
    cy.get('div.header-logo>a>img').click()
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')

  })

})






