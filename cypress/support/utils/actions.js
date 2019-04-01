export const getRandomValueFromDropdownList = function () {
	return new Cypress.Promise((resolve, reject) => {
		cy.get('div[class*="dropdown__option"]').then(($option) => {
			const random = chance.integer({ min: 0, max: $option.length - 1 });
			cy.log(random);
			cy.get('div[class*="dropdown__option"]').eq(random).invoke('text').then(($text) => {
				resolve($text);
			});

		});
	});
};

export const selectDropdownList = function (labelText, valueText, parentCss) {
	return new Cypress.Promise((resolve, reject) => {
		if (parentCss === undefined) parentCss = 'body';
		cy.get(parentCss).within(() => {
			cy.contains('div', labelText, {timeout:10000}).next().find('div[class*="dropdown__control"]')
				.find('input').focus().type(' ', { force: true }).then(() => {
				getRandomValueFromDropdownList(parentCss).then(($random) => {
					cy.log($random);
					if (valueText === undefined) valueText = $random;
					cy.get('div[class*="dropdown__menu-list"]').contains('div', valueText).click();
					resolve(valueText);
				});
			});
		});
	});
};

export const enterInputByLable = function (labelText, valueText, parentCss) {
	if (parentCss === undefined) parentCss = 'document';
	cy.get(parentCss).within(() => {
		cy.contains('div', labelText).next()
			.find('input').focus().clear().type(valueText);
	});
};

export const enterInputByElement = function (element, value) {
	cy.get(element).type(value);
};

export const checkRadioOrCheckbox = function (element) {
	cy.get(element).find('input').check();
};
