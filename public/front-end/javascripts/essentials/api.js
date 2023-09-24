const API = {
	verifyResponse(res) {
		if (res.unauthorized) {
			alert(res.unauthorized);
			return window.location.href = '/login';
		};

		if (res.msg) {
			lib.message(res.msg);
			return true;
		};

		return false;
	},
	response: async (func, param, element) => {
		lib.loader.init(element);
		let response = await func(param);
		lib.loader.stop(element);
		if (!response) { return false; }
		return response;
	}
};