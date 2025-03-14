//page object model as a framework
//=============locators===============================

let elm_username = 'input#user-name'
let elm_password = 'input[name="password"]'
let elm_loginbtn = 'input#login-button'
let elm_errormsg = 'h3[data-test="error"]'

//==============functions==============================

export function loginFunction(uname, password){
    
    cy.get(elm_username).type(uname)
    cy.get(elm_password).type(password)
    cy.get(elm_loginbtn).click()

}

export function validateErrorMsg(message){

    cy.get(elm_errormsg).contains(message)
}