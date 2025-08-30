/// <reference types="cypress"/>

describe("Formulário Login", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.getByData('botao-login').click();
    })

    it("Deve realizar login com sucesso", () => {
        cy.getByData('email-input').type("neilton@alura.com");
        cy.getByData('senha-input').type("123456");
        cy.getByData('botao-enviar').click();
        cy.location('pathname').should('eq', '/home');
        cy.contains('p', 'Olá, Neilton Seguins').should('be.visible');
    })

    it("Não deve realizar login com email inválido", () => {
        cy.getByData('email-input').type("neiltonalura.com");
        cy.getByData('senha-input').type("123456");
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('be.visible');
    })

    it("Não deve realizar login com email vazio", () => {
        cy.getByData('senha-input').type("123456");
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('be.visible');
    })

    it("Deve informar erro ao logar quando senha ou email estiver errado", () => {
        cy.getByData('email-input').type("neilton@alura.com");
        cy.getByData('senha-input').type("12345");
        cy.getByData('botao-enviar').click();
        cy.contains('span', 'E-mail ou senha incorretos').should('be.visible');
    })
})