
export const chooseAvatarMenu = function (lable) {
	const avatarElem = 'div[class*=avatar-menu]';
	const optionsElem = 'div[class*=avatar-option]';

	cy.get(avatarElem).click();
	cy.get(optionsElem).should('be.visible');
	cy.contains(optionsElem).contains(lable).click();
};

export const logOut = function () {
	chooseAvatarMenu('Log out');
	const notificationElem = 'div[class*=logout-notification-modal-box]';
	cy.get(notificationElem).should('be.visible');
	cy.contains('button', 'Proceed').click();
};

export const gotoHomePage = function () {
	chooseAvatarMenu('Home');
};