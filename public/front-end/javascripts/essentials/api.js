const API = {
	verifyResponse(res) {
		if (res.unauthorized) {
			alert(res.unauthorized);
			return window.location.href = '/login';
		};

		if (res.msg) {
			if (!document.getElementById("msg")) {
				alert(res.msg);
				return true;
			}

			document.getElementById("msg").style.display = "";
			document.getElementById("msg-content").innerHTML = "";
			document.getElementById("msg-content").append(lib.element.create("div", {
				class: "box b1 center lucida-grande em12 bold"
			}, res.msg));

			return true;
		};

		return false;
	},
	response: async (func, param) => {
		if (document.getElementById('loader')) { document.getElementById('loader').style.visibility = 'visible'; }
		let element = await func(param);
		if (document.getElementById('loader')) { document.getElementById('loader').style.visibility = 'hidden'; }
		if (!element) { return false; }
		return element;
	}
};