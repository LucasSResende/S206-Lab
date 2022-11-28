Feature: Testando PokeAPI.

Background: Executa antes de cada teste a url padrão.
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno de um pokemon específico sem executar Background.
    Given url 'https://pokeapi.co/api/v2/pokemon/snorlax'
    When method get
    Then status 200

Scenario: Testando retorno com informações inválidas.
    Given url url_base
    And path 'pokemon/feioso'
    When method get
    Then status 404

Scenario: Testando retorno e verificando o tamanho do array, retornando o valor e comparando com a API
    Given url url_base
    And path '/pokemon/snorlax'
    When method get
    Then status 200
    And print karate.sizeOf(response.abilities)
    And match karate.sizeOf(response.abilities) == 3

Scenario: Testando retorno snorlax e conferindo informações sobre o pokemon.
    Given url url_base
    And path '/pokemon/snorlax'
    When method get
    Then status 200
    And match response.name == "snorlax"
    And match $.base_experience == 189
    And match response.id == 143
    And match response.weight == 4600

Scenario: Criando genêro no pokemon snorlax na API com falha.
    Given url url_base
    And path '/pokemon/snorlax'
    And request {"gender":["Male","Female"]}
    When method post
    Then status 404

Scenario: Deletando experiência no pokemon snorlax na API com falha
    Given url url_base
    And path '/pokemon/snorlax'
    And request {"base_experience":189}
    When method delete
    Then status 404