import * as actions from '../Utils/Actions.js';

export const goToLandingPage = function () {
	cy.visit('/');
};

export const goToLoginPage = function (loginButton = 'Log In') {
	actions.hitButton(loginButton);
};