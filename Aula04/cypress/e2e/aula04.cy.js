/// <reference types="cypress"/>


describe('Testes no site do Moodle - Inatel', () => {
  it('Caso de teste OK: Login correto', () => {

    logAuto()
    cy.get('.userpicture').click()
    cy.get(':nth-child(11) > .dropdown-item').click()
    cy.get('.deniedCookie').click()

  })


  it('Caso de teste Falha: Login com senha errada', () => {

    cy.visit('https://moodle.inatel.br/login/index.php')

    cy.get('.deniedCookie').click()
    cy.get('#username').type('lucas.resende@ges.inatel.br')
    cy.get('#password').type('1234')
    cy.get('#loginbtn').click()
    cy.get('.deniedCookie').click()
    cy.get('.alert').should('have.text', 'Nome de usuário ou senha errados. Por favor tente outra vez.')

  })

  it('Caso de teste OK: Login correto e entrada em painel de cursos', () => {

    logAuto()
    cy.get('.rui-sidebar-nav-text > :nth-child(1)').click()
    cy.get('#itemDashboard > .rui-sidebar-nav-text').click()

  })


  it('Caso de teste OK: Login correto e ordenar por matéria', () => {

    logAuto()
    cy.get('#sortingdropdown > .d-sm-inline-block').click()
    cy.get(':nth-child(1) > .dropdown-item').click()
  })


  it('Caso de teste OK: Entrar e veirifcar a função "Esqueceu seu usuário ou senha"', () => {

    cy.visit('https://moodle.inatel.br/login/index.php')

    cy.get('.deniedCookie').click()
    cy.get('.rui-login-forgot-btn').click()
    cy.get('.deniedCookie').click()
    cy.get('#id_email').type('lucas.resende@ges.inatel.br')
    cy.get('#id_submitbuttonemail').click()
    cy.get('.deniedCookie').click()
    cy.get('#notice > :nth-child(1)').should('have.text',
      'Se o nome de usuário ou o email estiverem corretos, um email deve ter sido enviado a você.')

  })


  it('Caso de teste Falha: Entrar e veirifcar a função "Esqueceu seu usuário ou senha"', () => {

    cy.visit('https://moodle.inatel.br/login/index.php')

    cy.get('.deniedCookie').click()
    cy.get('.rui-login-forgot-btn').click()
    cy.get('.deniedCookie').click()
    cy.get('#id_email').type('lucasresende')
    cy.get('#id_submitbuttonemail').click()
    cy.get('.deniedCookie').click()
    cy.get('#id_error_email').should('have.text', '\n            \n                \n                \n                \n            \n            Endereço de email inválido\n        ')


  })
})

function logAuto() {

  let user = 'xxx@email.com.br'
  let pw = '********'
  let logInfo = [user, pw]

  cy.visit('https://moodle.inatel.br/login/index.php')
  cy.get('.deniedCookie').click()
  cy.get('#username').type(user)
  cy.get('#password').type(pw)
  cy.get('#loginbtn').click()

  return logInfo
}
