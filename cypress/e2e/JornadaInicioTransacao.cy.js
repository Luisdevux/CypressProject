/// <reference types="cypress"/>

describe('Página Inicial', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('neilton@alura.com', '123456');
  });

  it('Deve permitir que o usuário acesse a aplicação, realize uma transação de transferência e faça um logout', () => {
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.transacao('Transferência', '2100000');
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 2100000');
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('Deve permitir que o usuário acesse a aplicação, realize uma transação de depósito e faça um logout', () => {
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.transacao('Depósito', '2100000');
    cy.getByData('lista-transacoes').find('li').last().contains('R$ 2100000');
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('Deve realizar operações de transação e depósito confirmando o saldo após cada operação', () => {
    let valorSaldo;
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.get('[data-testid="saldo"]').invoke('text').then(saldo => {
      const textoSaldo = saldo;
      valorSaldo = Number(textoSaldo.replace('R$', ''));
    }).then(() => {
      cy.transacao('Depósito', '1000');
      valorSaldo = Number(valorSaldo) + 1000
      cy.get('[data-testid="saldo"]').should('contain.text', `R$ ${valorSaldo}`)
      cy.transacao('Transferência', '1000');
      valorSaldo = Number(valorSaldo) -1000
      cy.get('[data-testid="saldo"]').should('contain.text', `R$ ${valorSaldo}`)
      cy.getByData('botao-sair').click();
      cy.location('pathname').should('eq', '/');
    })
  });
});