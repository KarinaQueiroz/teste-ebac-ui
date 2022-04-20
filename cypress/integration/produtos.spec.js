/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos/')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //pegar o 4 item da lista
            //.eq(3)
            .contains('Aero Daily Fitness Tee')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('.product-block')
        .contains('Aero Daily Fitness Tee').click()
        cy.wait(500)
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade +' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
            
    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Green', 3)
    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'XL', 'Black', 2)
    });
    
});