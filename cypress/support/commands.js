// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
});

Cypress.Commands.add('login', (email, senha) => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type(`${email}`);
    cy.getByData('senha-input').type(`${senha}`);
    cy.getByData('botao-enviar').click();
});

Cypress.Commands.add('transacao', (tipo, valor) => {
    cy.getByData('select-opcoes').select(`${tipo}`);
    cy.getByData('form-input').type(`${valor}`);
    cy.getByData('realiza-transacao').click();
});