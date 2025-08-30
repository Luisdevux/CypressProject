/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe("Formulário de cadastro", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.getByData('botao-cadastro').click();
    })
    
    it("Deve renderizar o titulo do formulário", () => {
        cy.contains('p', 'Preencha os campos abaixo para criar sua conta corrente!').should('be.visible');
    })

    it("Deve renderizar os campos do formulário", () => {
        cy.getByData('nome-input').should('be.visible');
        cy.getByData('email-input').should('be.visible');
        cy.getByData('senha-input').should('be.visible');
    })

    it("Deve renderizar os campos do formulário e cadastrar dados", () => {
        const nome = faker.person.fullName();
        const email = faker.internet.email();
        const senha = faker.internet.password();
        cy.getByData('nome-input').type(nome);
        cy.getByData('email-input').type(email);
        cy.getByData('senha-input').type(senha);
        cy.getByData('checkbox-input').click();
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-sucesso').should('be.visible');
    })
})