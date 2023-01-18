import * as action from '../Utils/Actions.js';
import * as data from '../Utils/Data.js';

export const inputUserName = function (userName = 'default name') {
  const userNameElem = 'div[class*=__userName--]';
  action.enterInputByElement(userNameElem, userName);
  return userName;
};
export const inputUserPassword = function (password = '12312312') {
  const userPasswordElem = 'div[class*=__userPassword--]';
  action.enterInputByElement(userPasswordElem, password);
  return password;
};
export const inputUserId = function (userId = 'S44523424') {
  const userEntityIdElem = '#Entity div[class*=__id--]';
  action.enterInputByElement(userEntityIdElem, userId);
  return userId;
};
export const submitLogin = function () {
  action.hitButton('Log In');
};

export const landOnLoginPage = function () {
  cy.visit(Cypress.env('loginUrl'));
};
export const clickToSignUpPage = function () {
  const signUpLinkElem = 'a[data-test=signup]';
  action.clickLink(signUpLinkElem);
};
export const loginWithAPI = function (userData = generateRandomUser()) {
  return cy
    .request({
      method: 'POST',
      url: Cypress.env('loginRequestUrl') + 'login/cb',
      form: true, // we are submitting a regular form body
      body: {
        RelayState: Cypress.env('loginRelayState'),
        accountType: userData.accountType,
        userName: userData.userName,
        userId: userData.userId,
        userFullName: userData.userFullName,
      },
      timeout: 120000,
    })
    .its('body')
    .then((body) => {
      const $html = Cypress.$(body);
      const $token = $html.find('input[name=token]').val();
      data.dataSingleton.getInstance().setToken($token);
      cy.visit('/login?token=' + $token).then(() => {
        return $token;
      });
    });
};
export const generateRandomUser = () => {
  const userName = chance.name({ middle: true });
  const userId =
    chance.character({ pool: 'BCDEFGHIJK' }) + chance.ssn({ dashes: false });

  const userData = {
    accountType: 'User',
    userName: chance.last(),
    userId: userId,
    userFullName: userName,
  };
  return userData;
};
