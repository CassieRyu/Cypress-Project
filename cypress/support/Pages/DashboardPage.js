
export const selectDesktopMenu = function (lable) {
	const menuElem = 'div[class*=side-menu]';
	cy.get(menuElem).contains(lable).click();
};