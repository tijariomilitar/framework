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
	response: async (func, param, element) => {
		document.getElementById('ajax-loader').style.visibility = 'visible';
		if(element){ 
			element = await func(param);
			document.getElementById('ajax-loader').style.visibility = 'hidden';
			if(!element){ return false; };
			return element;
		} else { 
			if(!await func(param)){ 
				document.getElementById('ajax-loader').style.visibility = 'hidden';
				return false 
			};
			return true; 
		};
	}
};