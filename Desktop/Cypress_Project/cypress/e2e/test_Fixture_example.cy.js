describe('Registration', () => {
  
    it('Fill the contast info', () => {     
      cy.visit('https://demo.guru99.com/test/newtours/register.php')

      cy.fixture("registration").then((contactData) => {

        
        cy.get('input[name="firstName"]').type(contactData.firstName)
        cy.get('input[name="lastName"]').type(contactData.lastName)
        cy.get('input[name="phone"]').type(contactData.Phone)
        cy.get('input[name="userName"]').type(contactData.email)


      })
    })

})