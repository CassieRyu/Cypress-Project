export const salutations = ['Dr', 'Mdm', 'Miss', 'Mr', 'Mrs', 'Ms', 'Others'];

export const dashboard_menu_options = ['Home', 'Articles', 'Notifications', 'Settings'];

export let dataSingleton = (function () {
	// Instance stores a reference to the Singleton
	let instance;

	function init() {
		// Singleton
		// Private methods and variables
		let token;
		let userData={};

		return {
			// Public methods and variables
			setToken: function (tokenValue) {
				token=tokenValue;
			},
			getToken: function () {
				return token;
			},
			setUserData: function (user) {
				userData = user;
			},
			getUserData: function () {
				return userData;
			}
		};
	}
	return {
		// Get the Singleton instance if one exists
		// or create one if it doesn't
		getInstance: function () {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	};
})();