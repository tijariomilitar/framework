// Management of static files
const version = "1.0";
const client_version = localStorage.getItem("bc-lib-v");

if (client_version != version) {
	localStorage.setItem("bc-lib-v", version);
	console.log(version);
	window.location.reload(true);
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