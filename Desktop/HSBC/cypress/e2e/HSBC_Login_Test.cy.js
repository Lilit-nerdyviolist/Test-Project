describe('Validate functionality of Login of HSBC website', () => {
    let testData;

    before(() => {
        cy.fixture('example').then((data) => {
            testData = data;
        });
    });


    beforeEach(() => {
        cy.visit('https://www.hsbc.co.in/');


    })
    it('Login test', () => {
        cy.get('div[class ="header-logo lg-2"]>h1').should('be.visible');
        cy.title().should("eq", 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
        cy.contains('Log On').click();
        cy.get('div[class="col-sm-12 userHeading"]>h2>span').should('be.visible');
        cy.get('button#username_submit_btn').should('be.visible');
        cy.get('button#username_submit_btn').should('be.disabled');
        cy.get('input#username').type(testData.email);
        cy.get('button#username_submit_btn').should('be.enabled');
        cy.get('input#rememberMe').should('not.be.checked');
        cy.get('span[class="icon icon-circle-help-solid help-icon"]').should('be.visible');
        cy.get('span[class="icon icon-circle-help-solid help-icon"]').click();
        cy.get('div[class="slider-inner-content"]>h3>span').should('be.visible');
        cy.get('span[class="icon icon-delete"]').should('be.visible');
        cy.get('span[class="icon icon-delete"]').click();



    })
})
