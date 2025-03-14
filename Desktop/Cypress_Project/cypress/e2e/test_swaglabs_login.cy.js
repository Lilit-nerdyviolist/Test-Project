
import { loginFunction, validateErrorMsg } from "../pages/loginPage";


describe('Validate the login functionality of swaglab app', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  })
  it('Successful login test', () => {     //it-iteration test

    loginFunction('standard_user', 'secret_sauce')
  })

  it('Login failure test', () => {

    loginFunction('standard_user', 'wrong_password')
   validateErrorMsg('Epic sadface: Username and password do not match any user in this service')
  })

  it('Login username failure test', () => {

    loginFunction('locked_out_user', 'secret_sauce')
    validateErrorMsg('Epic sadface: Sorry, this user has been locked out.')
  })

})