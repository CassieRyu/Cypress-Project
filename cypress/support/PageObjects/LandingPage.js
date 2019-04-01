import * as action from '../utils/actions.js';

export const goToLandingPage = function () {
	cy.visit('/');
};

export const goToLoginPage = function (loginButton = 'Log In') {
	action.hitButton(loginButton);
};