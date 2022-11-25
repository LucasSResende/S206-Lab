Feature: Testando resources da API gorest

Background: Executa uma vez antes de cada teste
    * def url_base = 'https://gorest.co.in/public/v2/'
    
Scenario: Acessando API posts de forma simples, sem utilizar o background
    Given url 'https://gorest.co.in/public/v2/posts'
    When method get
    Then status 200

Scenario: Acessando API pelo background e verificando o tamanho do array, retornando o valor e comparando com a API
    Given url url_base
    And path 'posts'
    When method get
    Then status 200

Scenario: Acessando API pelo background e verificando o tamanho do array, retornando o valor e comparando com a API
    Given url url_base
    And path 'posts'
    When method get
    Then status 200
    And print karate.sizeOf(response)
    And match karate.sizeOf(response) == 10

Scenario: Acessando API posts e verificando tipo do JSON, no caso um array e se existem variáveis com estes nomes e tipos
    Given url url_base
    And path 'posts'
    When method get
    Then status 200
    And match $ == '#[]'
    And match each $ contains {id: '#number', body: '#string'}

Scenario: Tentativa de entrada na API com falha no caminho do path
    Given url url_base
    And path 'users1'
    When method get
    Then status 404

Scenario: Criando um user na API com falha Não Autorizado
    Given url url_base
    And path 'users'
    And request {id:555, user_id:6545, title:"Teste", body:"123Teste"}
    When method post
    Then status 401



    

   