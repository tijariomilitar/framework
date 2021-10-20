const API = {
	verifyResponse(res){
		if(res.unauthorized){
			alert(res.unauthorized);
			return window.location.href = '/login';
		};
		if(res.msg){
			alert(res.msg);
			return true;
		};
		return false;
	},
	response: async (func, param) => {
		document.getElementById('loader') && document.getElementById('loader').style.visibility = 'visible';
		let element = await func(param);
		document.getElementById('loader') && document.getElementById('loader').style.visibility = 'hidden';
		if(!element){ return false; }
		return element;
	}
};