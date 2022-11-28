/// <reference types="cypress"/>


describe('Testes no site Globalsqa', () => {
  it('Caso de teste de cadastro automático com uma função', () => {
    log()
    
  })

  it('Caso de teste de entrada em usuário existente', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select('Ron Weasly')
    cy.get('#currency').select('Dollar')
    cy.get('form.ng-dirty > button').click()

  })

  
  it('Caso de teste com falha na função solicitada de transação', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Harry Potter')
    cy.get('form.ng-valid > .btn').click() 
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type('3')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')

  })
  
 function log() {

  let user = 'Trolls'
  let lastname = 'Maga'
  let code = '55652301'
  let logInfo = [user, lastname, code]

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  cy.get(':nth-child(3) > .btn').click()
  cy.get('[ng-class="btnClass1"]').click()
  cy.get(':nth-child(1) > .form-control').type(user)
  cy.get(':nth-child(2) > .form-control').type(lastname)
  cy.get(':nth-child(3) > .form-control').type(code)
  

  return logInfo
  }

  
})