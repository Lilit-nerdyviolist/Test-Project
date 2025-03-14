describe('Validate the dropdown value', () => {
  
    it('Select the country dropdown value', () => {     //it-iteration test
      cy.visit('https://demo.guru99.com/test/newtours/register.php')
      cy.get('select[name="country"]').select("ALBANIA") //give index number in dropdown
    })

    it('Validate default dropdown value', () => {     //it-iteration test
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').invoke("val").should("eq", "ALBANIA")
        cy.get('select[name="country"]>option').should('have.length',264)
  
    })
})