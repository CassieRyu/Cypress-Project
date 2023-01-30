import * as landingPage from '../../support/Pages/LandingPage';
import * as loginPage from '../../support/Pages/LoginPage';
import * as dashboardPage from '../../support/Pages/DashboardPage';
import * as assertions from '../../support/Utils/Assertions';
import * as header from '../../support/Pages/Header';
import * as data from '../../support/Utils/Data';
import 'chance';

describe.skip('Overview Dashboard', ()=>{

	context ('Dashboard Menu', () => {
		before('Login', ()=>{
			landingPage.goToLandingPage();
			loginPage.loginWithAPI();
		});
		after('log out', ()=>{
			header.logOut();
		});

		it('First level menu', () => {
			const randomMenuOption = chance.integer({min:0, max: data.dashboard_menu_options.length-1});
			const option = data.dashboard_menu_options[randomMenuOption];
			dashboardPage.selectDesktopMenu(option);
			assertions.assertTextDisplay(option, true, 'h3');
		});
	});
});