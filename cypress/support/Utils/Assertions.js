
export const assertCheckbox = function (element = '[type="checkbox"]', checked = true) {
	if(checked){
		cy.get(element).find('input').should('be.checked');
	} else {
		cy.get(element).find('input').should('not.be.checked');
	}
};

export const assertTextDisplay = function (text, display = true, element = 'html') {
	if(display){
		cy.get(element).should('have.text', text);
	} else {
		cy.contains(element, text).should('not.visible');
	}
};

export const urlInclude = function (url) {
	cy.url().should('include', url);
};