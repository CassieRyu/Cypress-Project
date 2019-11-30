/// <reference types="Cypress" />

context('Location', () => {
	beforeEach(() => {
		cy.visit('https://example.cypress.io/commands/location');
	});

	it('cy.location() - get window.location', () => {
		// https://on.cypress.io/location
		cy.location().should((location) => {
			expect(location.hash).to.be.empty;
			expect(location.href).to.eq('https://example.cypress.io/commands/location');
			expect(location.host).to.eq('example.cypress.io');
			expect(location.hostname).to.eq('example.cypress.io');
			expect(location.origin).to.eq('https://example.cypress.io');
			expect(location.pathname).to.eq('/commands/location');
			expect(location.port).to.eq('');
			expect(location.protocol).to.eq('https:');
			expect(location.search).to.be.empty;
		});
		cy.matchImageSnapshot('location page', { capture: 'fullPage' });
	});

});
