/// <reference types="cypress"/>

describe('Página Inicial', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve permitir que o usuário acesse a aplicação, realize uma transação de transferência e faça um logout', () => {
    cy.login('neilton@alura.com', '123456');
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('2100000');
    cy.getByData('realiza-transacao').click();
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 2100000');
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('Deve permitir que o usuário acesse a aplicação, realize uma transação de depósito e faça um logout', () => {
    cy.login('neilton@alura.com', '123456');
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.getByData('select-opcoes').select('Depósito');
    cy.getByData('form-input').type('2100000');
    cy.getByData('realiza-transacao').click();
    cy.getByData('lista-transacoes').find('li').last().contains('R$ 2100000');
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('Deve realizar operações de transação e depósito confirmando o saldo após cada operação', () => {
    cy.login('neilton@alura.com', '123456');
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('realiza-transacao').click();
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 2100000');
    cy.getByData('select-opcoes').select('Depósito');
    cy.getByData('form-input').type('2100000');
    cy.getByData('realiza-transacao').click();
    cy.getByData('lista-transacoes').find('li').last().contains('R$ 2100000');
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
});