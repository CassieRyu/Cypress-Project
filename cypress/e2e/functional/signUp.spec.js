import * as loginPage from '../../support/Pages/LoginPage';
import * as signUpPage from '../../support/Pages/SignUpPage';
import * as assertions from '../../support/Utils/Assertions';
import 'chance';

describe('Sign up with a new user test', () => {
  const testDataFile = Cypress.env('testDataPath') + 'users.json';

  context('sign up with name and password', () => {
    beforeEach('go to login page', () => {
      loginPage.landOnLoginPage();
      // loginPage.clickToSignUpPage();
    });
    it('go to sign up page with link on login page', () => {
      loginPage.clickToSignUpPage();
      assertions.urlInclude('signup');
    });

    it('happy path: sign up with a normal user', () => {
      loginPage.clickToSignUpPage();
      cy.fixture(testDataFile).then((users) => {
        var normalUser = users[0];
        signUpPage.enterFirstName(normalUser.name);
        const lastName = chance.last();
        signUpPage.enterLastName(lastName);
        signUpPage.enterUserName(normalUser.username);
        signUpPage.enterPassword(normalUser.address.zipcode);
        signUpPage.enterConfirmPassword(normalUser.address.zipcode);
        signUpPage.clickSignUpBtn();
      });
    });
  });
});
