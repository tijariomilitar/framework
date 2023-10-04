// Management of static files
const api_version = "1.0";
const api_client_version = localStorage.getItem("bc-api-v");

if (api_client_version != api_version) {
	localStorage.setItem("bc-api-v", api_version);
	api_client_version && window.location.reload(true);
}

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