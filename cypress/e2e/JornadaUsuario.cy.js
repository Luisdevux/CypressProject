/// <reference types="cypress"/>

describe('Página Inicial', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.login('neilton@alura.com', '123456');
  });

  it("Deve Renderizar o menu de serviços disponíveis no banco", () => {
    cy.contains('a', 'Início').should('be.visible')
    cy.contains('a', 'Cartões').should('be.visible')
    cy.contains('a', 'Serviços').should('be.visible')
    cy.contains('a', 'Investimentos').should('be.visible')
  })

  it("Deve ser possível acessar a sessão de cartões, visualizar os cartões disponíveis e deve conter os botões de Configurar e Bloquear", () => {
    cy.visit('http://localhost:3000/home/cartoes');
    cy.url().should('eq', 'http://localhost:3000/home/cartoes');
    cy.get('[src="/static/media/fisico.e048a4a9c1385705d1ad833c0789e7b8.svg"]').should('be.visible')
    cy.get('[src="/static/media/digital.e8e0a09cbd2323fbc2ce0b808aa6d48f.svg"]').should('be.visible')

    cy.contains('button', 'Configurar').should('be.visible')
    cy.contains('button', 'Bloquear').should('be.visible')
  })
})