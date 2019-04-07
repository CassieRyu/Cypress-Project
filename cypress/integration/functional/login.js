import * as landingPage from '../../support/Pages/LandingPage';
import * as loginPage from '../../support/Pages/LoginPage';
import * as assertions from '../../support/Utils/Assertions';
import * as header from '../../support/Pages/Header';

describe('Login', ()=>{

	context ('Login Function', () => {
		before('landing Page', ()=>{
			landingPage.goToLandingPage();
			landingPage.goToLoginPage('Log In');
		});
		after('log out', ()=>{
			header.logOut();
		});

		it('test login page', () => {
			const userName = 'Steven Smith';
			loginPage.inputUserName(userName);
			loginPage.inputUserPassword('12323123');
			loginPage.submitLogin();
			assertions.urlInclude('/dashboard');
			assertions.assertTextDisplay(`Welcome ${userName} !`, true, 'h3');
		});
	});
});