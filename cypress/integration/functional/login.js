import * as landingPage from '../../support/PageObjects/LandingPage';
import * as loginPage from '../../support/PageObjects/LoginPage';
import * as assertion from '../../support/utils/assertions';

describe('login', ()=>{

	before('landing Page', ()=>{
		landingPage.goToLandingPage();
		landingPage.goToLoginPage('Log In');
	});
	it('test login function', () => {
		const userName = 'Steven Smith';
		loginPage.inputUserName(userName);
		loginPage.inputUserPassword('12323123');
		loginPage.submitLogin();
		assertion.assertTextDisplay(`Welcome ${userName} !`, true, 'h3');
	});
});