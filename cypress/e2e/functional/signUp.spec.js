import * as loginPage from '../../support/Pages/LoginPage';
import * as signUpPage from '../../support/Pages/SignUpPage';
import * as assertions from '../../support/Utils/Assertions';

describe('Sign up with a new user test', () => {
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
      signUpPage.enterFirstName('John');
      signUpPage.enterFirstName('Smith');
      signUpPage.enterUserName('smith');
      signUpPage.enterPassword('test');
      signUpPage.enterConfirmPassword('test');
      signUpPage.clickSignUpBtn();
    });
  });
});
