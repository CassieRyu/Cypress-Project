import * as action from '../utils/actions.js';
import * as token from '../utils/token.js';

const userNameElem = 'div[class*=__userName--]';
const userPasswordElem = 'div[class*=__userPassword--]';
const userEntityIdElem = '#Entity div[class*=__id--]';

export const inputUserName = function (userName = 'defaul name') {
	action.enterInputByElement(userNameElem, userName);
	return userName;
};
export const inputUserPassword = function (password = '12312312') {
	action.enterInputByElement(userPasswordElem, password);
	return password;
};
export const inputEntityId = function (entityId = 'S44523424') {
	action.enterInputByElement(userEntityIdElem, entityId);
	return entityId;
};
export const loginWithAPI = function (userData = generateRandomUser()) {
	return cy.request(
		{
			method: 'POST',
			url: Cypress.env('loginRequestUrl') + 'login/cb',
			form: true, // we are submitting a regular form body
			body: {
				RelayState: Cypress.env('loginRelayState'),
				accountType: userData.accountType,
				entityId: userData.entityId,
				userName: userData.userName,
				userId: userData.userId,
				userFullName: userData.userFullName
			},
			timeout: 120000,
		}
	).its('body')
		.then((body) => {
			const $html = Cypress.$(body);
			const $token = $html.find('input[name=token]').val();
			token.dataSingleton.getInstance().setToken($token);
			cy.visit('/login?token=' + $token).then(() => {
				return $token;
			});
		});
};
export const generateRandomUser = ()=>{
	const entityID = chance.character({pool: 'BCDEFGHIJK'})+chance.ssn({ dashes: false });
	const userName = chance.name({ middle: true });
	const userId = generateNRIC('S');

	const userData = {
		accountType: 'User',
		entityId: entityID,
		userName: chance.last(),
		userId: userId,
		userFullName: userName
	};
	return userData;
};