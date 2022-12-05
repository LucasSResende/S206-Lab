<h1 align='center'>Lista Aula 04 - S206 Lab</h1>
<p align="left">Pasta destinada ao exercício proposto à consolidação de conhecimentos sobre GitHub, conhecimentos básicos adquiridos de HTML, casos de testes e geração de relatório dos testes realizados</p>

<div align="center">

![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

</div>

## 📜 Passo a passo

<h3> GitHub, local e Git Bash:</h3>

- Criar um diretório local e conta no GitHub e um repositório para armazenamento e futuros commits do projeto;

- Entrar no terminal Git Bash;

- Iniciar o projeto com os comandos:
```
npm init
```
```
npm install cypress
```

- Abrir cypress pela linha de comando:
```
./node_modules/.bin/cypress open
```

<h3> VS Code (HTML):</h3>

- Construir os casos de testes conforme aprendidos nas aulas;
- Todas as implementaçções estarão rodando em segundo plano e atualizando no navegador enquanto o cypress estiver rodando, não se preocupe, continue codando 😁;

- Após concluídas todas as implementações dos testes criados, verificar se está tudo pronto para criar os relatórios 📩. Fique atento, esta parte é muitoo importante e deve ser feita seguindo corretamente as instruções abaixo:

🚨
- Rodar specs pela primeira vez para criação das dependências:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

- Gerar um report HTML:

> -- Adicionando as dependências necessárias para gerar o reporte de testes:
npm i --save-dev cypress-mochawesome-reporter
	
> -- Modificar o arquivo cypress.config.js(Não é uma linha no terminal, é um comando para configuração do mochawsome 🚩):
```
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
```

> -- Adicionar em cypress/support/e2e.js (Não é uma linha no terminal, é um comando para configuração do mochawsome 🚩):

import 'cypress-mochawesome-reporter/register';

> -- - Rodar specs pela segunda vez para garatir criação do report correto:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

- Visualizar o relatório em um navegador arrastando o arquivo:

Aula04 > cypress > reports\html > index.html

para um navegador como aba, e analisar os testes realizados;

- Agora é só subir no GitHub o seu projeto construído e pronto!🛠️

🏆Realizado o projeto e o relatório!🎖️
