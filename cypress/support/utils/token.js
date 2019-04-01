export var dataSingleton = (function () {
	// Instance stores a reference to the Singleton
	var instance;

	function init() {
		// Singleton
		// Private methods and variables
		var token;
		var premises={};

		return {
			// Public methods and variables
			setToken: function (tokenvalue) {
				token=tokenvalue;
			},
			getToken: function () {
				return token;
			}
		};
	};
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