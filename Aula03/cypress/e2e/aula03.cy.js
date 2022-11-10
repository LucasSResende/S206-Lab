/// <reference types="cypress"/>

describe("Criando cenário de teste para o site globalsqa", () => {


  it('Caso de teste: Registrar user com falha (sem Last name)', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Teste Falha')
    cy.get('#Text1').type('falha')
    cy.get('#username').type('falhou')
    cy.get('#username').clear()
    cy.get('#password').type('123456')
    cy.get('.has-error > .help-block').should('have.text','Username is required')
    cy.get('.btn-primary').should('be.disabled')
  })


  it('Caso de teste: Registrar user com sucesso', () => {
    let info = criandoUser()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('have.text', 'Hi ' + info[0] + '!')

  })
  
  
})


function criandoUser(){

  let horas = new Date().getHours().toString()
  let min = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let user = horas + min + seg + 'ID'
  let pw = horas + min + seg + 'senha'
  let userInfo = [user,pw]

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(user)
    cy.get('#Text1').type(user)
    cy.get('#username').type(user)
    cy.get('#password').type(pw)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text','Registration successful')

    return userInfo
  

}