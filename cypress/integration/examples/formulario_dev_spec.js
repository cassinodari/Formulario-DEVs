context('Cadastro de DEVs', () => {

    beforeEach(() => {
        cy.visit('../../../../formulario.html');
    })
    
    it('Deve submeter o formulário', () => {
        cy.get('#nome').as('name').type('Cassiane');
        cy.get('#sobrenome').as('lastName').type('Nodari');
        cy.get('#email').as('email').type('cassi.nodari@hotmail.com');
        cy.get('input[type="radio"][value="backend"]').as('backendRadio').check();
        cy.get('#senioridade').as('seniority').select('Junior');
        cy.get('input[type="checkbox"][value="HTML"]').as('htmlCheckbox').check();
        cy.get('input[type="checkbox"][value="PHP"]').as('phpCheckbox').check();
        cy.get('input[type="checkbox"][value="C#"]').as('cCheckbox').check();
        cy.get('input[type="checkbox"][value="Java"]').as('javaCheckbox').check();
        cy.get('#experiencia').click().type('Pouca experiência');
        // cy.get('#fundo-branco').screenshot('antes-de-submeter-o-form');
        cy.get('.botao').contains('Concluído').click();

        cy.get('@name').should('be.empty');
        cy.get('@lastName').should('be.empty');
        cy.get('@email').should('be.empty');
        cy.get('@backendRadio').should('not.be.checked');
        cy.get('input[type="radio"][value="frontend"]').should('be.checked');
        cy.get('@htmlCheckbox').should('not.be.checked');
        cy.get('@phpCheckbox').should('not.be.checked');
        cy.get('@cCheckbox').should('not.be.checked');
        cy.get('@javaCheckbox').should('not.be.checked');
    });
    
    it('Preencher os campos e submeter usando comandos customizados', () => {
        cy.preencherFormESubmeter();
        cy.confirmaFormEstadoInicial();
    })

    it('Possui título e subtítulo', () => {
        cy.get('#titulo').should('have.text', 'Cadastro de DEVs');
        cy.get('#subtitulo').should('have.text', 'Complete suas informações');
        // cy.get('#titulo').contains('Cadastro de DEVs').should('be.visible');
        // cy.get('#subtitulo').contains('Complete suas informações').should('be.visible');
    });
});