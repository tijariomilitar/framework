// -------------------
// javascript lib
// -------------------
const lib = {};

// Essa função será desativada, utilizar lib.message
lib.msg = (msg) => {
	if (!document.getElementById("msg")) {
		alert(msg);
		return true;
	}

	document.getElementById("msg").style.display = "";
	document.getElementById("msg-content").innerHTML = "";
	document.getElementById("msg-content").append(lib.element.create("div", {
		class: "box b1 center lucida-grande em12 bold"
	}, msg));
};

lib.loader = {};

lib.loader.init = (element) => {
	let overlay = lib.element.create("div", {});
	if (!element) {
		lib.addCss(overlay, ["loader-body-overlay"]);
		overlay.append(lib.element.create("div", { class: "loader" }));
		document.body.append(overlay);
	} else if (element.tagName == "IMG") {
		element.dataset.src = `${element.src}`;
		element.src = "https://wt-images-cdn.sfo3.cdn.digitaloceanspaces.com/lib.images/loader.gif";
		element.dataset.func = element.onclick;
		element.onclick = "";
	} else if (element.tagName == "INPUT") {
		lib.addCss(element, ["loader-element-container"]);
		lib.addCss(overlay, ["loader-element-overlay"]);
		overlay.append(lib.element.create("div", { class: "loader" }));
		element.append(overlay);
		if (element) { element.disabled = true; }
	} else {
		lib.addCss(element, ["loader-element-container"]);
		lib.addCss(overlay, ["loader-element-overlay"]);
		overlay.append(lib.element.create("div", { class: "loader" }));
		element.append(overlay);
		if (element) { element.disabled = true; }
	}
};

lib.loader.stop = (element) => {
	if (!element || element.tagName == "INPUT") {
		Array.from(document.getElementsByClassName("loader-body-overlay")).forEach(el => el.remove());
		if (element) { element.disabled = false; }
	} else if (element.tagName == "IMG") {
		element.src = `${element.dataset.src}`;
		element.onclick = element.dataset.func;
	} else {
		if (element) { element.disabled = false; }
		Array.from(element.getElementsByClassName("loader-element-container")).forEach(el => lib.removeCss(el, ["loader-element-container"]));
		Array.from(element.getElementsByClassName("loader-element-overlay")).forEach(el => el.remove());
	}
};

lib.message = (msg, cb) => {
	const focused_btn = document.querySelector(':focus');
	focused_btn && focused_btn.blur();

	const msg_div = lib.element.create("div", { class: "msg", style: "z-index: 1000;" });
	const msg_popup = lib.element.create("div", { class: "msg-popup container box b3-4 container border-st radius-5 padding-10" });
	msg_popup.append(lib.element.create("div", { class: "mobile-box b10" }));

	const alert_icon = lib.element.create("div", { class: "mobile-box b4-5 center" });
	alert_icon.append(lib.element.create("img", {
		src: "https://wt-images-cdn.sfo3.cdn.digitaloceanspaces.com/lib.images/alert.png",
		class: "image-prop size-25 noselect"
	}));
	msg_popup.append(alert_icon);

	const close_div = lib.element.create("div", { class: "mobile-box a10 center" });
	const close_icon = lib.element.create("div", { class: "em20 icon pointer" }, "&times;");
	close_div.append(close_icon);
	msg_popup.append(close_div);

	msg_popup.append(lib.element.create("div", {
		class: "box b1 center lucida-grande em12 bold margin-top-20"
	}, msg));

	msg_div.append(msg_popup);
	document.body.append(msg_div);

	function esc() {
		document.removeEventListener("keydown", keydown);
		msg_div.remove();
		if (typeof cb === 'function') { return cb(); }
	};

	function keydown(e) {
		if (e.keyCode == 27) { esc(); }
	};

	close_icon.addEventListener("click", esc);
	document.addEventListener("keydown", keydown);
};

lib.popup = (element, cb) => {
	const focused_btn = document.querySelector(':focus');
	focused_btn && focused_btn.blur();

	const msg_div = lib.element.create("div", {
		class: "msg h-center",
		style: "z-index: 1000;"
	});
	const msg_popup = lib.element.create("div", {
		class: "msg-popup box a3-4 container radius-5 scroll-y-auto scroll-small"
	});

	const close_div = lib.element.create("div", {
		class: "mobile-box a1 container ground center sticky",
		style: "top: 0;z-index: 1001;"
	});
	msg_popup.append(close_div);
	close_div.append(lib.element.create("div", { class: "mobile-box b9-10" }));
	const close_icon = lib.element.create("div", { class: "em20 icon pointer center" }, "&times;");
	close_div.append(close_icon);

	msg_popup.append(element);

	msg_div.append(msg_popup);
	document.body.append(msg_div);
	document.body.style.overflow = "hidden";

	function esc() {
		document.removeEventListener("keydown", keydown);
		document.body.style.overflow = "auto";
		msg_div.remove();
		if (typeof cb === 'function') { return cb(); }
	};

	function keydown(e) {
		if (e.keyCode == 27) { esc(); }
	};

	close_icon.addEventListener("click", esc);
	document.addEventListener("keydown", keydown);
};

lib.popout = element => {
	element.parentNode.parentNode.remove();
	document.body.style.overflow = "auto";
};

lib.auth = (message, cb) => {
	let auth = "";

	const auth_div = lib.element.create("div", { class: "auth-div", style: "z-index: 1000;" });
	const auth_content = lib.element.create("div", { class: "auth-content container box b3-4 container border-st radius-5 padding-10" });
	auth_div.append(auth_content);

	message && auth_content.append(lib.element.create("div", { class: "box b1 lucida-grande bold border center padding-5" }, `${message}`));
	auth_content.append(lib.element.create("div", { class: "box b1 lucida-grande em13 bold center padding-5 margin-top-5" }, "Digite sua senha"));

	auth_content.append(lib.element.create("input", {
		id: "auth_value",
		type: "password",
		class: "box b1 em15 bold border-st nofocus center padding-10",
		readOnly: true,
		value: ''
	}));

	const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	buttons.forEach(buttonValue => {
		let button;
		if (buttonValue === "0") {
			let eraseButton = lib.element.create("div", { class: "mobile-box b3 container border-st margin-top-5 height-100" });
			eraseButton.append(lib.element.create("img", { src: "https://wt-images-cdn.sfo3.cdn.digitaloceanspaces.com/lib.images/erase.png", class: "image-prop size-30 center noselect" }));
			auth_content.append(eraseButton);

			eraseButton.addEventListener("click", e => {
				e.preventDefault();

				auth = auth.slice(0, -1);
				document.getElementById("auth_value").value = auth;
			});

			button = lib.element.create("button", { class: "mobile-box b3 em15 bold border-st margin-top-5 height-100 center noselect" });
		} else {
			button = lib.element.create("button", { class: "mobile-box b3 em15 bold border-st margin-top-5 height-100 center noselect" });
		}

		button.textContent = buttonValue;

		button.addEventListener("click", e => {
			e.preventDefault();

			auth += buttonValue;
			document.getElementById("auth_value").value = auth;

			if (auth.length === 4) {
				document.removeEventListener("keydown", keydown);
				auth_div.remove();

				return cb(auth);
			}
		});

		auth_content.append(button);
	});

	let escButton = lib.element.create("div", { class: "mobile-box b3 container border-st margin-top-5 height-100" });
	escButton.append(lib.element.create("div", { class: "box b1 lucida-grande bold center noselect" }, "Cancelar"));
	auth_content.append(escButton);

	document.body.append(auth_div);

	function esc() {
		document.removeEventListener("keydown", keydown);
		auth_div.remove();
		if (typeof cb === 'function') { return cb(); }
	};

	function keydown(e) {
		e.preventDefault();
		if (e.keyCode == 27) { esc(); }
	};

	escButton.addEventListener("click", esc);
	document.addEventListener("keydown", keydown);
};

lib.pass = (cb) => {
	let pass = "";

	document.getElementById("msg").style.display = "";

	let content_div = document.getElementById("msg-content");
	content_div.innerHTML = "";
	content_div.append(lib.element.create("div", { class: "box b1 em15 bold center padding-10" }, "Digite seu passe"));

	content_div.append(lib.element.create("input", {
		id: "pass-value",
		type: "password",
		class: "box b1 em15 bold border-st nofocus center padding-10",
		readOnly: true,
		value: ''
	}));

	const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	buttons.forEach(buttonValue => {
		let button;
		if (buttonValue === "0") {
			eraseButton = lib.element.create("div", { class: "mobile-box b3 container border-st margin-top-5 height-100" });
			eraseButton.append(lib.element.create("img", { src: "https://wt-images-cdn.sfo3.cdn.digitaloceanspaces.com/lib.images/close.png", class: "image-prop size-30 center noselect" }));

			eraseButton.addEventListener("click", e => {
				e.preventDefault();

				pass = pass.slice(0, -1);
				document.getElementById("pass-value").value = pass;
			});
			content_div.append(eraseButton);

			button = lib.element.create("button", { class: "mobile-box b3 em15 bold border-st margin-top-5 height-100 center noselect" });
		} else {
			button = lib.element.create("button", { class: "mobile-box b3 em15 bold border-st margin-top-5 height-100 center noselect" });
		}

		button.textContent = buttonValue;

		button.addEventListener("click", e => {
			e.preventDefault();

			pass += buttonValue;
			document.getElementById("pass-value").value = pass;

			if (pass.length === 4) {
				content_div.innerHTML = "";
				lib.display("msg", "none");

				return cb(pass);
			}
		});

		content_div.append(button);
	});
};

lib.confirm = (msg, cb) => {
	const msg_div = lib.element.create("div", { class: "msg", style: "z-index: 1000;" });
	const msg_popup = lib.element.create("div", { class: "msg-popup container mobile-box b3-4 container border-st radius-5 padding-10" });
	const alert_icon = lib.element.create("div", { class: "mobile-box a1 center" });
	alert_icon.append(lib.element.create("img", { src: "https://wt-images-cdn.sfo3.cdn.digitaloceanspaces.com/lib.images/alert.png", class: "image-prop size-30 noselect" }))
	msg_popup.append(alert_icon);

	msg_popup.append(lib.element.create("div", {
		class: "box b1 center lucida-grande bold margin-top-10"
	}, msg));

	function confirm() {
		document.removeEventListener("keydown", keydown);
		msg_div.remove();
		return cb(true);
	};

	function cancel() {
		document.removeEventListener("keydown", keydown);
		msg_div.remove();
		return cb(false);
	};

	function keydown(e) {
		e.preventDefault();
		e.keyCode == 13 && confirm(e);
		e.keyCode == 27 && cancel(e);
	};

	const confirm_btn = lib.element.create("div", {
		class: "mobile-box b2 bold btn-act radius-5 padding-10 margin-top-10 center noselect pointer",
	}, "Confirmar");
	confirm_btn.addEventListener("click", confirm);
	msg_popup.append(confirm_btn);

	const cancel_btn = lib.element.create("div", {
		class: "mobile-box b2 bold btn-cancel radius-5 padding-10 margin-top-10 center noselect pointer",
	}, "cancelar");
	cancel_btn.addEventListener("click", cancel);
	msg_popup.append(cancel_btn);

	msg_div.append(msg_popup);
	document.body.append(msg_div);

	document.addEventListener("keydown", keydown);
};

lib.cookieConfirm = (msg, cb) => {
	const msg_div = lib.element.create("div", { class: "msg", style: "z-index: 1000;" });
	const msg_popup = lib.element.create("div", { class: "msg-popup container mobile-box b3-4 container border-st radius-5 padding-10" });
	const alert_icon = lib.element.create("div", { class: "mobile-box a1 center" });
	alert_icon.append(lib.element.create("img", { src: "https://wt-images-cdn.sfo3.cdn.digitaloceanspaces.com/lib.images/alert.png", class: "image-prop size-30 noselect" }))
	msg_popup.append(alert_icon);

	msg_popup.append(lib.element.create("div", {
		class: "box b1 center lucida-grande bold margin-top-10"
	}, msg));

	function confirm() {
		document.removeEventListener("keydown", keydown);
		msg_div.remove();
		return cb(true);
	};

	function cancel() {
		document.removeEventListener("keydown", keydown);
		// msg_div.remove();
		return cb(false);
	};

	function keydown(e) {
		e.preventDefault();
		e.keyCode == 13 && confirm(e);
		e.keyCode == 27 && cancel(e);
	};

	const confirm_btn = lib.element.create("div", {
		class: "mobile-box b2 bold btn-act radius-5 padding-10 margin-top-10 center noselect pointer",
	}, "Entendi");
	confirm_btn.addEventListener("click", confirm);
	msg_popup.append(confirm_btn);

	const cancel_btn = lib.element.create("div", {
		class: "mobile-box b2 bold radius-5 padding-10 margin-top-10 center noselect pointer",
		style: "background-color: #222; color: #fff"
	}, "Entender melhor");
	cancel_btn.addEventListener("click", cancel);
	msg_popup.append(cancel_btn);

	msg_div.append(msg_popup);
	document.body.append(msg_div);

	document.addEventListener("keydown", keydown);
};

// -------------------
// Date
// -------------------
lib.genDate = () => {
	let d = new Date();
	let date = "";
	if (d.getDate() < 10 && parseInt(d.getMonth()) + 1 > 9) {
		date = "0" + d.getDate() + "-" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear();
	} else if (d.getDate() > 9 && parseInt(d.getMonth()) + 1 < 10) {
		date = "" + d.getDate() + "-0" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear();
	} else if (parseInt(d.getDate()) < 10 && parseInt(d.getMonth()) + 1 < 10) {
		date = "0" + d.getDate() + "-0" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear();
	} else {
		date = "" + d.getDate() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getFullYear();
	};
	return date;
};

lib.genPatternDate = () => {
	let d = new Date();
	let date = "";
	if (d.getDate() < 10 && parseInt(d.getMonth()) + 1 > 9) {
		date = "" + d.getFullYear() + "-" + (parseInt(d.getMonth()) + 1) + "-0" + d.getDate();
	} else if (d.getDate() > 9 && parseInt(d.getMonth()) + 1 < 10) {
		date = "" + d.getFullYear() + "-0" + (parseInt(d.getMonth()) + 1) + "-" + d.getDate();
	} else if (parseInt(d.getDate()) < 10 && parseInt(d.getMonth()) + 1 < 10) {
		date = "" + d.getFullYear() + "-0" + (parseInt(d.getMonth()) + 1) + "-0" + d.getDate();
	} else {
		date = "" + d.getFullYear() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getDate();
	};
	return date;
};

lib.genFullDate = () => {
	let d = new Date();
	let date = "";
	if (d.getDate() < 10 && parseInt(d.getMonth()) + 1 > 9) {
		date = "0" + d.getDate() + "-" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
	} else if (d.getDate() > 9 && parseInt(d.getMonth()) + 1 < 10) {
		date = "" + d.getDate() + "-0" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
	} else if (parseInt(d.getDate()) < 10 && parseInt(d.getMonth()) + 1 < 10) {
		date = "0" + d.getDate() + "-0" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
	} else {
		date = "" + d.getDate() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
	};
	return date;
};

lib.genTimestamp = () => {
	const currentDate = new Date();
	const timestamp = currentDate.getTime();
	return timestamp;
};

lib.convertDate = (date) => {
	if (date) {
		let str = date.split('-');
		if (str != "") {
			var convertedDate = str[2] + "-" + str[1] + "-" + str[0];
		} else {
			var convertedDate = "";
		};
		return convertedDate;
	};
	return false;
};

lib.convertDatetime = (datetime) => {
	if (datetime) {
		let str = datetime.split('T');
		if (str != "") {
			var convertedDate = lib.convertDate(str[0]) + " " + str[1];
		} else {
			var convertedDate = "";
		};
		return convertedDate;
	};
	return false;
};

lib.dateToTimestamp = (date) => {
	if (date) {
		let splited_date = date.split('-');
		splited_date.year = splited_date[0];
		splited_date.month = splited_date[1];
		splited_date.day = splited_date[2];
		date = new Date(splited_date.year, (splited_date.month - 1), splited_date.day);
		return date.getTime();
	};
	return false;
};

lib.patterndateToTimestamp = (date) => {
	if (date) {
		let splited_date = date.split('-');
		splited_date.year = splited_date[0];
		splited_date.month = splited_date[1];
		splited_date.day = splited_date[2];
		console.log(splited_date);
		date = new Date(splited_date.year, (splited_date.month - 1), splited_date.day);
		return date.getTime();
	};
	return false;
};

lib.fulldateToTimestamp = (fulldate) => {
	if (fulldate) {
		let date = fulldate.split("-");
		date.day = date[0];
		date.month = date[1];
		date.year = date[2];
		date.hour = date[3].split(":")[0];
		date.minute = date[3].split(":")[1];
		date = new Date(date.year, date.month - 1, date.day, date.hour, date.minute);
		return date.getTime();
	}
	return false;
};

lib.datetimeToTimestamp = (datetime) => {
	if (datetime) {
		let date = datetime.split("T");
		date.year = date[0].split("-")[0];
		date.month = date[0].split("-")[1];
		date.day = date[0].split("-")[2];
		date.hour = date[1].split(":")[0];
		date.minute = date[1].split(":")[1];
		date = new Date(date.year, date.month - 1, date.day, date.hour, date.minute);
		return date.getTime();
	}
	return false;
};

lib.fulldateToDatetime = () => {
	return null;
};

lib.timestampDay = () => { return 86400000; }

lib.timestampToDate = (timestamp) => {
	if (timestamp) {
		let date = new Date(parseInt(timestamp));
		let day; let month; let hour; let minute;
		if (date.getDate() < 10) { day = "0" + date.getDate() } else { day = date.getDate() };
		if (date.getMonth() < 9) { month = "0" + (date.getMonth() + 1) } else { month = (date.getMonth() + 1) };
		if (date.getHours() < 10) { hour = "0" + date.getHours() } else { hour = date.getHours() };
		if (date.getMinutes() < 10) { minute = "0" + date.getMinutes() } else { minute = date.getMinutes() };
		return day + '-' + month + '-' + date.getFullYear();
	};
	return false;
};

lib.timestampToFulldate = (timestamp) => {
	if (timestamp) {
		let date = new Date(parseInt(timestamp));
		let day; let month; let hour; let minute;
		if (date.getDate() < 10) { day = "0" + date.getDate() } else { day = date.getDate() };
		if (date.getMonth() < 9) { month = "0" + (date.getMonth() + 1) } else { month = (date.getMonth() + 1) };
		if (date.getHours() < 10) { hour = "0" + date.getHours() } else { hour = date.getHours() };
		if (date.getMinutes() < 10) { minute = "0" + date.getMinutes() } else { minute = date.getMinutes() };
		return day + '-' + month + '-' + date.getFullYear() + ' ' + hour + ':' + minute;
	};
	return false;
};

lib.timestampToDatetime = (timestamp) => {
	if (timestamp) {
		let date = new Date(parseInt(timestamp));
		let day; let month; let hour; let minute;
		if (date.getDate() < 10) { day = "0" + date.getDate() } else { day = date.getDate() };
		if (date.getMonth() < 9) { month = "0" + (date.getMonth() + 1) } else { month = (date.getMonth() + 1) };
		if (date.getHours() < 10) { hour = "0" + date.getHours() } else { hour = date.getHours() };
		if (date.getMinutes() < 10) { minute = "0" + date.getMinutes() } else { minute = date.getMinutes() };
		return date.getFullYear() + '-' + month + '-' + day + 'T' + hour + ':' + minute;
	};
	return false;
};

lib.firstDayOfMonth = () => {
	let date = lib.timestampToDate(lib.genTimestamp()).split("-");
	return `01-${date[1]}-${date[2]}`;
};

lib.fillDateInput = (input) => {
	return input.valueAsDate = new Date();
};

lib.fillDatetimeInput = (input) => {
	let date = new Date();
	let day; let month; let hour; let minute;
	if (date.getDate() < 10) { day = "0" + date.getDate() } else { day = date.getDate() };
	if (date.getMonth() < 10) { month = "0" + (date.getMonth() + 1) } else { month = (date.getMonth() + 1) };
	if (date.getHours() < 10) { hour = "0" + date.getHours() } else { hour = date.getHours() };
	if (date.getMinutes() < 10) { minute = "0" + date.getMinutes() } else { minute = date.getMinutes() };
	return input.value = date.getFullYear() + '-' + month + '-' + day + 'T' + hour + ':' + minute;
};

lib.colectByMonth = (month, dates) => {
	let array = [];
	let str = [];
	for (i in dates) {
		str = dates[i].date.split('-');
		if (parseInt(str[1]) == parseInt(month)) {
			array.push(dates[i]);
		};
	};
	return array;
};

// -------------------
// Math
// -------------------
lib.roundToInt = (num, places) => {
	return (parseFloat(num).toFixed(places));
};

lib.roundValue = (value) => {
	return Math.round((value) * 100) / 100;
};

// -------------------
// DOM manipulation
// -------------------
lib.displayDiv = (div, button, openEl, closeEl) => {
	let selectedDiv = typeof div === 'string' ? document.getElementById(div) : div;

	if (!selectedDiv) {
		console.error('Elemento div não encontrado');
		return;
	}

	if (button.nodeName == "IMG") {
		if (selectedDiv.style.display == "none") {
			if (button && openEl && closeEl) { button.src = closeEl; };
			selectedDiv.style.display = "";
		} else if (selectedDiv.style.display == "") {
			if (button && openEl && closeEl) { button.src = openEl; };
			selectedDiv.style.display = "none";
		};
	} else {
		if (selectedDiv.style.display == "none") {
			if (button && openEl && closeEl) { button.innerHTML = closeEl; };
			selectedDiv.style.display = "";
		} else if (selectedDiv.style.display == "") {
			if (button && openEl && closeEl) { button.innerHTML = openEl; };
			selectedDiv.style.display = "none";
		};
	}
};

lib.clearInnerHtml = (target) => {
	target.innerHTML = "";
};

lib.displayMenuText = (button, openText, closeText) => {
	if (button.innerHTML == openText) { button.innerHTML = closeText; }
	else if (button.innerHTML == closeText) { button.innerHTML = openText; };
};

lib.clearTable = (table, location) => {
	document.getElementById(table).innerHTML = "NENHUM REGISTRO ENCONTRADO";
	$('#' + location + 'Previous').prop('disabled');
	$('#' + location + 'Next').prop('disabled');
	$('#' + location + 'PageNumber').text('0');
};

lib.noRecord = (table) => {
	document.getElementById(table).innerHTML = "NENHUM REGISTRO ENCONTRADO";
};

lib.fillSelect = (selectLocation, location, route, method) => {
	$.ajax({
		url: route,
		method: method,
		success: (response) => {
			var select = document.getElementById(location);
			select.innerHTML = "";
			select.innerHTML += "<option value='0'>" + selectLocation + "</option>"
			for (i in response) {
				select.innerHTML += "<option value='" + response[i].id + "'>" + response[i].name + "</option>"
			};
		}
	});
};

lib.findCheckedRadios = (radio_name) => {
	let radios = document.getElementsByName(radio_name);
	for (let i in radios) {
		if (radios[i].checked) {
			return radios[i];
		};
	};
	radios = false;
	radios.value = false;
	return radios;
};

lib.splitTextBy = (text, split_string) => {
	if (text && split_string) {
		let splited_text = text.split(split_string);
		return splited_text;
	};
	return false;
};

lib.splitSelectTextBy = (select, string) => {
	if (select && string) {
		let row = select.options[select.selectedIndex].text;
		let splited_text = row.split(string);
		splited_text.select = { value: select.value };
		return splited_text;
	};
	return false;
};

lib.capitalizeFirst = (words) => {
	let separateWord = words.toLowerCase().split(' ');
	for (let i = 0; i < separateWord.length; i++) {
		separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
			separateWord[i].substring(1);
	};
	return separateWord.join(' ');
};

lib.clearSelect = (select) => {
	select.innerHTML = "";
	select.innerHTML += "<option value='0'>Sem resultados</option>"
};

lib.focus = (input) => {
	if (input.id) {
		document.getElementById(input.id).focus();
	} else {
		input.focus();
	};
};


//Mask
lib.mask = {};

lib.mask.phone = (input) => {
	let number = input.value.replace(/\D/g, '');

	if (number.length == 0) {
		input.value = '';
	} else if (number.length <= 2) {
		input.value = '(' + number;
	} else if (number.length <= 6) {
		input.value = '(' + number.substring(0, 2) + ') ' + number.substring(2);
	} else if (number.length <= 10) {
		input.value = '(' + number.substring(0, 2) + ') ' + number.substring(2, 6) + '-' + number.substring(6);
	} else {
		input.value = '(' + number.substring(0, 2) + ') ' + number.substring(2, 7) + '-' + number.substring(7);
	}
};

lib.format = {};

lib.format.phone = (value) => {
	let phoneNumber = value.replace(/\D/g, '');

	let phone;

	if (phoneNumber.length == 0) {
		phone = '';
	} else if (phoneNumber.length <= 2) {
		phone = '(' + phoneNumber;
	} else if (phoneNumber.length <= 6) {
		phone = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2);
	} else if (phoneNumber.length <= 10) {
		phone = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 6) + '-' + phoneNumber.substring(6);
	} else {
		phone = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7);
	}

	return phone;
};

lib.mask.cnpj = (input) => {
	let cnpj = input.value.replace(/\D/g, '');

	if (cnpj.length == 0) {
		input.value = '';
	} else if (cnpj.length <= 2) {
		input.value = cnpj;
	} else if (cnpj.length <= 5) {
		input.value = cnpj.substring(0, 2) + '.' + cnpj.substring(2);
	} else if (cnpj.length <= 8) {
		input.value = cnpj.substring(0, 2) + '.' + cnpj.substring(2, 5) + '.' + cnpj.substring(5);
	} else if (cnpj.length <= 12) {
		input.value = cnpj.substring(0, 2) + '.' + cnpj.substring(2, 5) + '.' + cnpj.substring(5, 8) + '/' + cnpj.substring(8);
	} else {
		input.value = cnpj.substring(0, 2) + '.' + cnpj.substring(2, 5) + '.' + cnpj.substring(5, 8) + '/' + cnpj.substring(8, 12) + '-' + cnpj.substring(12);
	}
};

lib.verifyEmail = (email) => {
	var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (regex.test(email)) {
		return true;
	} else {
		return false;
	}
};

// -------------------
// Canvas
// -------------------
lib.rect = (ctx, c, x, y, w, h) => {
	ctx.fillStyle = c;
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.closePath();
	ctx.fill();
};

lib.drawRects = (ctx, rects) => {
	for (i in rects) {
		ctx.fillStyle = rects[i].color;
		lib.rect(ctx, rects[i].x, rects[i].y, rects[i].width, rects[i].height);
	};
};

lib.collide = (r1, r2) => {
	let dx = (r1.x + r1.width / 2) - (r2.x + r2.width / 2);
	let dy = (r1.y + r1.height / 2) - (r2.y + r2.height / 2);
	let width = (r1.width + r2.width) / 2;
	let height = (r1.height + r2.height) / 2;
	let crossWidth = width * dy;
	let crossHeight = height * dx;
	let collision = 'none';
	//
	if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
		if (crossWidth > crossHeight) {
			collision = (crossWidth > (-crossHeight)) ? 'bottom' : 'left';
		} else {
			collision = (crossWidth > -(crossHeight)) ? 'right' : 'top';
		}
	}
	return (collision);
};

// -------------------
// Carousel
// -------------------

// Simple Image or Banner Carousel
lib.Carousel = (box, render, items, pagination) => {
	box.innerHTML = "";

	let items_div = lib.element.create("div", { class: "box b1 container h-center" });
	box.append(items_div);

	let navigation_div = lib.element.create("div", { class: "box b1 container h-center padding-10" });
	box.append(navigation_div);

	let navigation_previous = lib.element.create("img", { src: "/images/icon/back-arrow-black.png", class: "mobile-box b12 size-30 icon noselect" });
	navigation_div.append(navigation_previous);
	let navigation_span = lib.element.create("span", { class: "mobile-box b2 lucida-grande bold nowrap center noselect" });
	navigation_div.append(navigation_span);
	let navigation_next = lib.element.create("img", { src: "/images/icon/next-arrow-black.png", class: "mobile-box b12 size-30 icon noselect" });
	navigation_div.append(navigation_next);

	const CarouselPaging = () => {
		items_div.innerHTML = "";
		render(items, pagination, items_div);
	};

	const CarouselNavigation = () => {
		if (!items.length) {
			navigation_previous.disabled = true;
			navigation_span.innerHTML = " 0 ";
			navigation_next.disabled = true;
		};

		if (items.length && items.length <= pagination.pageSize) {
			navigation_previous.disabled = true;
			navigation_span.innerHTML = "1 de 1";
			navigation_next.disabled = true;
		};

		if (items.length > pagination.pageSize) {
			if (pagination.page <= 0) {
				pagination.page = 0;
				navigation_previous.disabled = true;
				navigation_span.innerHTML = "" + (pagination.page + 1) + " de " + Math.ceil(items.length / pagination.pageSize);
				navigation_next.disabled = false;
			};

			if (pagination.page > 0 && pagination.page < (items.length / pagination.pageSize) - 1) {
				navigation_previous.disabled = false;
				navigation_span.innerHTML = "" + (pagination.page + 1) + " de " + Math.ceil(items.length / pagination.pageSize);
				navigation_next.disabled = false;
			};

			if (pagination.page >= (items.length / pagination.pageSize) - 1) {
				navigation_previous.disabled = false;
				navigation_span.innerHTML = "" + (pagination.page + 1) + " de " + Math.ceil(items.length / pagination.pageSize);
				navigation_next.disabled = true;
			};
		};
	};

	//events
	navigation_previous.onclick = function () {
		window.scrollTo(0, box.getBoundingClientRect().top - document.body.getBoundingClientRect().top);
		if (pagination.page > 0) {
			pagination.page--;
			CarouselPaging();
			CarouselNavigation();
		};
	};

	navigation_next.onclick = function () {
		window.scrollTo(0, box.getBoundingClientRect().top - document.body.getBoundingClientRect().top);
		if (pagination.page < items.length / pagination.pageSize - 1) {
			pagination.page++;
			CarouselPaging();
			CarouselNavigation();
		};
	};

	CarouselPaging();
	CarouselNavigation();
};

lib.carousel = {};

lib.carousel.render = (carousel_name) => {
	let slides = document.querySelectorAll("[data-js='" + carousel_name + "']");
	let prevButton = document.querySelector("[data-js='" + carousel_name + "-prev']");
	let pageDiv = document.querySelector("[data-js='" + carousel_name + "-page']");
	let nextButton = document.querySelector("[data-js='" + carousel_name + "-next']");

	let lastSlideIndex = slides.length - 1;
	let currentSlideIndex = 0;

	let updatePage = currentPage => {
		pageDiv.innerHTML = `${currentPage} de ${slides.length}`;
	};

	let manipulateSlidesClasses = correctSlideIndex => {
		slides.forEach(slide => slide.classList.remove("display-block"));
		slides[correctSlideIndex].classList.add("display-block");
	};

	prevButton.addEventListener("click", () => {
		let correctSlideIndex = currentSlideIndex === 0
			? currentSlideIndex = lastSlideIndex
			: --currentSlideIndex

		manipulateSlidesClasses(correctSlideIndex);
		updatePage(currentSlideIndex + 1);
	});

	nextButton.addEventListener("click", () => {
		let correctSlideIndex = currentSlideIndex === lastSlideIndex
			? currentSlideIndex = 0
			: ++currentSlideIndex;

		manipulateSlidesClasses(correctSlideIndex);
		updatePage(currentSlideIndex + 1);
	});

	updatePage(currentSlideIndex + 1);
};

lib.carousel.execute = (box, render, response, pagination) => {
	document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").onclick = function () {
		window.scrollTo(0, document.getElementById(box).getBoundingClientRect().top - document.body.getBoundingClientRect().top);
		if (pagination.page > 0) {
			pagination.page--;
			lib.carousel.paging(render, response, pagination);
			lib.carousel.navigation(box, response, pagination);
		};
	};

	document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").onclick = function () {
		window.scrollTo(0, document.getElementById(box).getBoundingClientRect().top - document.body.getBoundingClientRect().top);
		if (pagination.page < response.length / pagination.pageSize - 1) {
			pagination.page++;
			lib.carousel.paging(render, response, pagination);
			lib.carousel.navigation(box, response, pagination);
		};
	};
	lib.carousel.paging(render, response, pagination);
	lib.carousel.navigation(box, response, pagination);
};

lib.carousel.paging = (render, response, pagination) => {
	render(response, pagination);
};

lib.carousel.navigation = (box, response, pagination) => {
	if (!response.length) {
		document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = true;
		document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = " 0 ";
		document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = true;
	};

	if (response.length && response.length <= pagination.pageSize) {
		document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = true;
		document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = "1 de 1";
		document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = true;
	};

	if (response.length > pagination.pageSize) {
		if (pagination.page <= 0) {
			pagination.page = 0;
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = true;
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = "" + (pagination.page + 1) + " de " + Math.ceil(response.length / pagination.pageSize);
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = false;
		};

		if (pagination.page > 0 && pagination.page < (response.length / pagination.pageSize) - 1) {
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = false;
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = "" + (pagination.page + 1) + " de " + Math.ceil(response.length / pagination.pageSize);
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = false;
		};

		if (pagination.page >= (response.length / pagination.pageSize) - 1) {
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = false;
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = "" + (pagination.page + 1) + " de " + Math.ceil(response.length / pagination.pageSize);
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = true;
		};
	};
}

// -------------------
// Array
// -------------------
lib.index = {};

lib.index.last = (objects) => {
	return objects.length - 1;
};

lib.sort = (arr, key, order) => {
	return arr = arr.sort((a, b) => {
		if (order == "desc") {
			return b[key] - a[key];
		} else {
			return a[key] - b[key];
		}
	});
};

lib.sort2 = (arr, key, order) => {
	return arr.sort((a, b) => {
		if (order == "des") {
			return b[key].localeCompare(a[key]);
		} else {
			return a[key].localeCompare(b[key]);
		}
	});
};

lib.sort3 = (arr, key, order) => {
	return arr.sort((a, b) => {
		let itemA = a[key];
		let itemB = b[key];

		// Verifica se os itens são números ou strings
		const isNumberA = !isNaN(parseFloat(itemA)) && isFinite(itemA);
		const isNumberB = !isNaN(parseFloat(itemB)) && isFinite(itemB);

		if (order == "desc") {
			if (isNumberA && isNumberB) {
				return itemB - itemA; // Ordenação numérica decrescente
			} else {
				return itemB.toString().localeCompare(itemA.toString()); // Ordenação alfabética decrescente
			}
		} else {
			if (isNumberA && isNumberB) {
				return itemA - itemB; // Ordenação numérica crescente
			} else {
				return itemA.toString().localeCompare(itemB.toString()); // Ordenação alfabética crescente
			}
		}
	});
};

// -------------------
// pre code format
// -------------------
lib.formatHTML = (string) => {
	string = string.replaceAll('<', '&lt;');
	string = string.replaceAll('>', '&gt;');

	let html = "";
	html += "<pre class='box b1 em09'><code>";
	html += string;
	html += "</code></pre>";
	return html;
};

// -------------------
// String
// -------------------
lib.removeChar = (string, regex) => {
	for (let i in regex) { string = string.replaceAll(regex[i], ""); };
	return string;
};

lib.replaceChar = (string, regex, content) => {
	string = string.replaceAll(regex, content);
	return string;
};

lib.hasForbiddenChar = (url) => {
	const forbiddenChars = /[#%&{}\s\\<>*?/$!'":@+,`|[\]^~();¨´áãéíóõúâêîôûàèìòùäëïöüç~]/g;
	return forbiddenChars.test(url);
};

lib.clearString = (str) => {
	const forbiddenChars = /[#%&{}\s\\<>*?/$!'":@+,`|[\]^~();¨´áãéíóõúâêîôûàèìòùäëïöüç~_-]/g;
	return str.replace(forbiddenChars, '');
};

lib.isValidNumber = (value) => {
	if (value !== null && value !== "" && !isNaN(value)) { return true; }
	else { return false; }
};

// -------------------
// Dropdown
// -------------------
lib.dropdown = {};

lib.dropdown.render = (objects, input_id, dropdown_id, target, key, props) => {
	if (objects.length) {
		let html = "";
		for (i in objects) {
			html += "<li><input type='button' class='box b1 box-hover wrapper padding-10 border' data-id='" + objects[i][key] + "' value='";
			for (j in props) {
				if (props.length - 1 > j) {
					html += objects[i][props[j]] + " | ";
				} else if (props.length - 1 == j) {
					html += objects[i][props[j]];
				};
			};
			html += "' onclick='lib.dropdown.fill." + target + "(this, `" + input_id + "`, `" + dropdown_id + "`)'></li>";
		};
		document.getElementById(dropdown_id).innerHTML = html;
	} else {
		document.getElementById(dropdown_id).innerHTML = "";
	};
};

lib.dropdown.fill = {}

lib.dropdown.fill.input = (dropdown_input, input_id, dropdown_id) => {
	document.getElementById(input_id).dataset.id = dropdown_input.dataset.id;
	document.getElementById(input_id).value = dropdown_input.value;
	document.getElementById(input_id).readOnly = true;

	document.getElementById(dropdown_id).innerHTML = "";
};

lib.dropdown.input = (objects, input, content, props, func) => {
	content.innerHTML = "";
	content.style.display = 'block';

	input.onclick = function (event) {
		event.stopPropagation();
		if (this.readOnly) { this.value = ''; this.dataset.id = ''; this.readOnly = false; }
		content.style.display = 'block';
	};

	content.onclick = function (event) {
		event.stopPropagation();
	};

	objects.forEach(obj => {
		const item = lib.element.create("div", {
			class: "box a1 container box-hover em09 border-lg-st padding-3 pointer",
			'data-id': obj["id"]
		});

		for (let i in props) {
			item.append(lib.element.info(props[i][2], props[i][1], obj[props[i][0]]));
		};

		item.onclick = function (event) {
			input.dataset.id = this.dataset.id;
			input.value = props.reduce((value, prop, currI, arr) => {
				if (currI == arr.length - 1) { value += `${obj[prop[0]]}`; }
				else { value += `${obj[prop[0]]} | `; }
				return value;
			}, "");
			input.readOnly = true;
			content.style.display = 'none';
			func && obj.id && func(obj.id);
		};

		content.appendChild(item);
	});

	document.addEventListener('click', function (event) {
		if (content.style.display == "block") {
			lib.display(content, "none");
		}
	});
};

lib.Dropdown = {};

lib.Dropdown.setEvents = (dropdown_box, dropdown_ul) => {
	document.getElementById(dropdown_box).addEventListener("mouseover", e => {
		lib.display(dropdown_ul, "");
	});

	document.getElementById(dropdown_box).addEventListener("mouseout", e => {
		lib.display(dropdown_ul, "none");
	});
};

lib.Dropdown.render = (objects, input, dropdown_id, props) => {
	let dropdown_ul = document.getElementById(dropdown_id);
	dropdown_ul.innerHTML = "";

	if (!objects.length) { return false; }

	objects.forEach(obj => {
		let dropdown_li = lib.element.create("li", {});

		let obj_info = "";
		for (let i in props) {
			if (i != props.length - 1) { obj_info += `${obj[props[i]]} | ` }
			else { obj_info += `${obj[props[i]]}` }
		};

		dropdown_li = lib.element.create("input", {
			class: "box b1 lucida-grande bold box-hover wrapper padding-10 border pointer",
			'data-id': obj["id"],
			value: obj_info,
			onclick: `lib.Dropdown.fill(this, '${input.id}', '${dropdown_id}');`
		});
		dropdown_ul.append(dropdown_li);
	});
};

lib.Dropdown.fill = (dropdown_input, input_id, dropdown_id) => {
	document.getElementById(input_id).dataset.id = dropdown_input.dataset.id;
	document.getElementById(input_id).value = dropdown_input.value;
	document.getElementById(input_id).readOnly = true;

	document.getElementById(dropdown_id).innerHTML = "";
};

// Adress API
lib.address = {};

lib.address.get = async (CEP) => {
	let response = await fetch("https://viacep.com.br/ws/" + CEP + "/json/");
	response = await response.json();

	if (API.verifyResponse(response)) { return false };

	return response;
};

lib.address.fillForm = async (cep, form) => {
	let address = await lib.address.get(cep);
	if (address.logradouro) { document.getElementById(form).elements.namedItem("street").value = address.logradouro; };
	if (address.complemento) { document.getElementById(form).elements.namedItem("complement").value = address.complemento; };
	if (address.bairro) { document.getElementById(form).elements.namedItem("neighborhood").value = address.bairro; };
	if (address.localidade) { document.getElementById(form).elements.namedItem("city").value = address.localidade; };
	if (address.uf) { document.getElementById(form).elements.namedItem("state").value = address.uf; };
};

lib.listarEstados = () => {
	return [
		{ codigo_uf: 27, uf: 'AL', unidade_federativa: 'Alagoas' },
		{ codigo_uf: 12, uf: 'AC', unidade_federativa: 'Acre' },
		{ codigo_uf: 16, uf: 'AP', unidade_federativa: 'Amapá' },
		{ codigo_uf: 13, uf: 'AM', unidade_federativa: 'Amazonas' },
		{ codigo_uf: 29, uf: 'BA', unidade_federativa: 'Bahia' },
		{ codigo_uf: 23, uf: 'CE', unidade_federativa: 'Ceará' },
		{ codigo_uf: 53, uf: 'DF', unidade_federativa: 'Distrito Federal' },
		{ codigo_uf: 32, uf: 'ES', unidade_federativa: 'Espírito Santo' },
		{ codigo_uf: 52, uf: 'GO', unidade_federativa: 'Goías' },
		{ codigo_uf: 21, uf: 'MA', unidade_federativa: 'Maranhão' },
		{ codigo_uf: 51, uf: 'MT', unidade_federativa: 'Mato Grosso' },
		{ codigo_uf: 50, uf: 'MS', unidade_federativa: 'Mato Grosso do Sul' },
		{ codigo_uf: 31, uf: 'MG', unidade_federativa: 'Minas Gerais' },
		{ codigo_uf: 15, uf: 'PA', unidade_federativa: 'Pará' },
		{ codigo_uf: 25, uf: 'PB', unidade_federativa: 'Paraíba' },
		{ codigo_uf: 41, uf: 'PR', unidade_federativa: 'Paraná' },
		{ codigo_uf: 26, uf: 'PE', unidade_federativa: 'Pernambuco' },
		{ codigo_uf: 22, uf: 'PI', unidade_federativa: 'Piauí' },
		{ codigo_uf: 33, uf: 'RJ', unidade_federativa: 'Rio de Janeiro' },
		{ codigo_uf: 24, uf: 'RN', unidade_federativa: 'Rio Grande do Norte' },
		{ codigo_uf: 43, uf: 'RS', unidade_federativa: 'Rio Grande do Sul' },
		{ codigo_uf: 11, uf: 'RO', unidade_federativa: 'Rondônia' },
		{ codigo_uf: 14, uf: 'RR', unidade_federativa: 'Roraíma' },
		{ codigo_uf: 42, uf: 'SC', unidade_federativa: 'Santa Catarina' },
		{ codigo_uf: 35, uf: 'SP', unidade_federativa: 'São Paulo' },
		{ codigo_uf: 28, uf: 'SE', unidade_federativa: 'Sergipe' },
		{ codigo_uf: 17, uf: 'TO', unidade_federativa: 'Tocantins' },
	];
};

lib.listarCidadesPorEstado = async (UF) => {
	let cidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`);
	cidades = await cidades.json();

	return cidades;
};

lib.eventEmmiter = (element, event) => {
	let e = new Event(event);
	element.dispatchEvent(e);
};

lib.copyToClipboard = (output, element, regex) => {
	let text;
	if (output && element) { text = document.getElementById(output).elements.namedItem(element); }
	else if (output && !element) { text = document.getElementById(output); }
	else { alert("Texto inválido!"); return false; }
	text.value = lib.removeChar(text.value, regex);
	text.select();
	document.execCommand("copy");
	alert("Copiado para área de transferência");
	return true;
};

lib.openExternalLink = (url) => {
	if ('http'.substr(0, 4) == url.substr(0, 4)) {
		window.open(url, '_blank');
	} else {
		url = "https://" + url;
		window.open(url, '_blank');
	};
};

lib.kart = function (name, variable, props) {
	this.name = name;
	this.variable = variable;
	this.items = [];
	this.props = props;

	this.insert = function (key, item) {
		if (key) {
			for (let i in this.items) {
				if (this.items[i][key] == item[key]) {
					alert("Você já incluiu este produto no carrinho.");
					return false;
				};
			};
		};

		this.items.push(item);
		this.update(key);

		let stringified_kart = JSON.stringify(this.items);

		return true;
	};

	this.list = function (kart, props) {
		if (this.items.length) {
			let html = "";
			html += "<tr>";
			for (i in props) {
				html += "<td class='padding-5 center em06'>" + Object.entries(props[i])[0][1] + "</td>";
			};
			html += "</tr>";
			for (i in this.items) {
				html += "<tr class='border'>";
				for (j in props) {
					if (j == 0) {
						html += "<td class='padding-5 em09'>" + this.items[i][Object.entries(props[j])[0][0]] + "</td>";
					} else {
						html += "<td class='padding-5 em09'>" + this.items[i][Object.entries(props[j])[0][0]] + "</td>";
					};
				};
				html += "<td class='padding-3'><img class='size-15 icon padding-3 pointer' src='/images/icon/decrease.png' onclick='" + this.variable + ".decrease(" + this.items[i].id + ")'></td>";
				html += "<td><input type='text' id='" + this.variable + "-" + this.items[i].id + "' class='width-50 em11 border-bottom center' onchange='" + this.variable + ".updateAmount(" + this.items[i].id + ", this.value);lib.focus(this)' value='" + this.items[i].amount + "'></td>";
				html += "<td class='padding-3'><img class='size-15 icon padding-3 pointer' src='/images/icon/increase.png' onclick='" + this.variable + ".increase(" + this.items[i].id + ")'></td>";
				html += "<td class='padding-3'><img class='size-20 icon padding-3 pointer' src='/images/icon/trash.png' onclick='" + this.variable + ".remove(" + this.items[i].id + ")'></td>";
				html += "</tr>";
			};
			document.getElementById(this.name + "-table").innerHTML = html;
		} else {
			document.getElementById(this.name + "-table").innerHTML = "";
		};
	};

	this.update = function (key) {
		return this.items = this.items.sort((a, b) => {
			return a[key] - b[key];
		});
	};

	this.decrease = (obj_id) => {
		for (i in this.items) {
			if (this.items[i].id == obj_id && this.items[i].amount > 1) {
				this.items[i].amount -= 1;
			};
		};
		let stringified_kart = JSON.stringify(this.items);
		this.list(this.variable, this.props);
	};

	this.increase = (obj_id) => {
		for (let i in this.items) {
			if (this.items[i].id == obj_id) {
				this.items[i].amount += 1;
			};
		};
		let stringified_kart = JSON.stringify(this.items);
		this.list(this.variable, this.props);
	};

	this.remove = (obj_id) => {
		var kart_backup = [];
		for (let i in this.items) {
			if (this.items[i].id != obj_id) {
				kart_backup.push(this.items[i]);
			};
		};

		this.items = kart_backup;

		let stringified_kart = JSON.stringify(this.items);
		this.list(this.variable, this.props);
	};

	this.updateAmount = async (obj_id, amount) => {
		if (amount < 1 || isNaN(amount)) {
			alert("Quantidade Inválida");
			return this.list(this.variable, this.props);
		};

		for (i in this.items) {
			if (this.items[i].id == obj_id) {
				this.items[i].amount = parseInt(amount);

				let stringified_kart = JSON.stringify(this.items);

				return this.list(this.variable, this.props);
			};
		};
	};
};

lib.localStorage = {};

lib.localStorage.verify = (item) => {
	if (localStorage.getItem(item) != null) {
		return true;
	};
	return false;
};

lib.localStorage.update = (item, stringified_object) => {
	localStorage.setItem(item, stringified_object);
};

lib.localStorage.remove = (item) => {
	localStorage.removeItem(item);
};

lib.image = {};

lib.image.zoom = (image) => {
	let image_copy = image.cloneNode(true);

	lib.addCss(image_copy, ["image-prop", "max-height-500", "center"]);
	lib.removeCss(image_copy, ["box", "image-fit", "margin-right-2", "border"]);
	image_copy.style = "";

	lib.popup(image_copy);
};

lib.image.carousel = (images, parentElement, cb) => {
	var isDown = false;
	var isDragging = false;
	var startX;
	var startY;
	var scrollLeft;

	images.forEach(function (image) {
		let image_box = lib.element.create("div", {
			class: 'box ground border radius-5 margin-right-5',
			style: images.length > 1 ?
				'width: 90%;height: 100%;flex-grow: 1;flex-shrink: 0;flex-basis: auto;' :
				'width: 100%;height: 100%;flex-grow: 1;flex-shrink: 0;flex-basis: auto;'
		});
		parentElement.append(image_box);

		let image_div = lib.element.create("img", {
			src: image.url,
			class: '',
			style: "width: 100%;height:100%;object-fit: contain;"
		});
		image_box.append(image_div);

		cb && image_div.addEventListener("click", async function (e) {
			if (!isDragging) {
				cb(image_div);
			}
		});

	});

	parentElement.addEventListener('mousedown', function (e) {
		isDown = true;
		startX = e.pageX - parentElement.offsetLeft;
		scrollLeft = parentElement.scrollLeft;
	});

	parentElement.addEventListener('mouseleave', function () {
		isDown = false;
	});

	parentElement.addEventListener('mouseup', function () {
		setTimeout(function () { isDragging = false; }, 50);
		isDown = false;
	});

	images.length > 1 && parentElement.addEventListener('mousemove', function (e) {
		if (!isDown) return;
		isDragging = true;
		e.preventDefault();
		var x = e.pageX - parentElement.offsetLeft;
		var walk = (x - startX) * 2; // Ajuste a sensibilidade do scroll horizontal conforme necessário
		parentElement.scrollLeft = scrollLeft - walk;
	});

	// Para detecção de toque em dispositivos móveis
	parentElement.addEventListener('touchstart', function (e) {
		isDown = true;
		startX = e.touches[0].pageX - parentElement.offsetLeft;
		startY = e.touches[0].pageY - parentElement.offsetTop;
		scrollLeft = parentElement.scrollLeft;
		scrollTop = parentElement.scrollTop;
	});

	parentElement.addEventListener('touchend', function () {
		setTimeout(function () { isDragging = false; }, 50);
		isDown = false;
	});

	images.length > 1 && parentElement.addEventListener('touchmove', function (e) {
		if (!isDown) return;
		var x = e.touches[0].pageX - parentElement.offsetLeft;
		var y = e.touches[0].pageY - parentElement.offsetTop;
		var walkX = (x - startX) * 2; // Ajuste a sensibilidade do scroll horizontal conforme necessário
		var walkY = (y - startY) * 2; // Ajuste a sensibilidade do scroll vertical conforme necessário

		if (Math.abs(walkY) > Math.abs(walkX)) {
			// Movimento vertical maior que o horizontal, permite a rolagem vertical
			return;
		}

		e.preventDefault(); // Impede a rolagem da página

		parentElement.scrollLeft = scrollLeft - walkX;
	});
};

lib.ruleOfThree = (index, target, sample) => {
	if (!isNaN(index) && !isNaN(target) && !isNaN(sample)) {
		return ((target * sample) / index);
	};
	return false;
};

lib.updateCssVariable = (origin, variable, content) => {
	let root = document.querySelector(origin).style;
	root.setProperty(variable, content);
};

lib.addCss = (element, cssClasses) => {
	if (element.tagName) {
		cssClasses.forEach(c => element.classList.add(c));
		return;
	};
	cssClasses.forEach(c => document.getElementById(element).classList.add(c));
};

lib.removeCss = (element, cssClasses) => {
	if (element.tagName) {
		cssClasses.forEach(c => element.classList.remove(c));
		return;
	};
	cssClasses.forEach(c => document.getElementById(element).classList.remove(c));
};

lib.disable = (element, state) => {
	if (element.tagName) {
		return element.disabled = state;
	};
	document.getElementById(element).disabled = state;
};

lib.display = (element, state) => {
	if (element.tagName) {
		return element.style.display = state;
	};
	document.getElementById(element).style.display = state;
};

lib.element = {};

lib.element.create = (elementName, attributes, value) => {
	let element = document.createElement(elementName);
	let attributesAsArray = Object.entries(attributes);

	attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value));

	// if (value) { element.textContent = value; }
	if (value) { element.innerHTML = value; }

	return element;
};

lib.element.icon = (box, size, src, action) => {
	let div = lib.element.create("div", { class: "mobile-box " + box + " container center" });
	let img = lib.element.create("img", {
		class: "size-" + size + " noselect center",
		src: src,
		onclick: action
	});
	div.appendChild(img);
	return div;
};

lib.element.info = (box, param, paramValue) => {
	let divParent = lib.element.create("div", { class: "mobile-box " + box + " container border padding-5" });
	let divParam = lib.element.create("div", { class: "mobile-box b1 em07 bold" }, param);
	let divValue = lib.element.create("div", { class: "mobile-box b1" }, paramValue);

	divParent.appendChild(divParam);
	divParent.appendChild(divValue);
	return divParent;
};

lib.element.createInfo = (css, param, value, param_css, value_css) => {
	let divParent = lib.element.create("div", { class: css });
	let divParam = lib.element.create("div", { class: `mobile-box b1 em07 ${param_css}` }, param);
	let divValue = lib.element.create("div", { class: `mobile-box b1 ${value_css}` }, value);

	divParent.appendChild(divParam);
	divParent.appendChild(divValue);
	return divParent;
};

lib.element.param = (box, param, element, option) => {
	let divParent = lib.element.create("div", { class: "mobile-box " + box + " container padding-5 margin-top-5" });
	let divInput = lib.element.create("div", { class: "mobile-box b1 em06" }, param);
	let divValue = lib.element.create(element, option);

	divParent.appendChild(divInput);
	divParent.appendChild(divValue);
	return divParent;
};

lib.element.infoInput = (box, param, paramValue, input_id) => {
	let divParent = lib.element.create("div", { class: "mobile-box " + box + " container border padding-5 margin-top-5" });
	let divParam = lib.element.create("div", { class: "mobile-box b1 em06" }, param);
	let divValue = lib.element.create("input", { id: input_id, class: "mobile-box b1" }, paramValue);

	divParent.appendChild(divParam);
	divParent.appendChild(divValue);
	return divParent;
};

lib.element.rotate = (el, deg, dir = 'right', transit = true) => {
	let currentRotation = parseInt(el.dataset.rotation) || 0;

	const lastDir = currentRotation % 360 === 0 ? 'right' : 'left';
	const rotationValue = dir === lastDir ? deg : -deg;
	currentRotation += rotationValue;

	if (transit) { el.style.transition = 'transform 0.5s ease'; }
	el.style.transform = `rotate(${currentRotation}deg)`;
	el.dataset.rotation = currentRotation.toString();
};

// drag and drop
lib.drag = {};

lib.drag.element = (element) => {
	element.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('text/plain', element.id);
	});
};

lib.drag.drop = (dropArea, cb, targetArea, css, dir) => {
	dropArea.addEventListener('dragover', (e) => {
		if (!dropArea.classList.contains(css)) {
			dropArea.classList.add(css);
		}

		e.preventDefault();
	});

	dropArea.addEventListener("dragleave", (e) => {
		if (dropArea.classList.contains(css)) {
			dropArea.classList.remove(css);
		}
	});

	dropArea.addEventListener('drop', (e) => {
		e.preventDefault();

		const element_id = e.dataTransfer.getData('text/plain');
		const draggedElement = document.getElementById(element_id);

		if (dropArea === draggedElement) { return false; }

		if (dir === 'v') {
			if (draggedElement.offsetLeft > dropArea.offsetLeft) {
				!targetArea && dropArea.parentNode.insertBefore(draggedElement, dropArea);
				targetArea && targetArea.insertBefore(draggedElement, dropArea);
			} else {
				!targetArea && dropArea.parentNode.insertBefore(draggedElement, dropArea.nextSibling);
				targetArea && targetArea.insertBefore(draggedElement, dropArea.nextSibling);
			}
		} else if (dir === 'h') {
			if (draggedElement.offsetTop > dropArea.offsetTop) {
				!targetArea && dropArea.parentNode.insertBefore(draggedElement, dropArea);
				targetArea && targetArea.insertBefore(draggedElement, dropArea);
			} else {
				!targetArea && dropArea.parentNode.insertBefore(draggedElement, dropArea.nextSibling);
				targetArea && targetArea.insertBefore(draggedElement, dropArea.nextSibling);
			}
		} else {
			!targetArea && dropArea.append(draggedElement);
			targetArea && targetArea.append(draggedElement);
		}

		if (dropArea.classList.contains(css)) {
			dropArea.classList.remove(css);
		}

		cb(element_id);
	});
};

// Sanitize using DOMPurify
lib.sanitize = string => {
	if (typeof DOMPurify == "function") {
		return DOMPurify.sanitize(string);
	} else {
		return string;
	}
};

lib.dinamicInputNumber = (input) => {
	// Remover caracteres não numéricos
	input.value = input.value.replace(/[^0-9]/g, '');

	// Obter o valor do input como uma string
	var valorString = input.value;

	let decimalPlaces = parseFloat(input.step).toString().split('.')[1];
	if (!decimalPlaces) {
		return;
	} else {
		decimalPlaces = decimalPlaces.length;
	}

	// Converter a string para um número dividido em parte inteira e parte decimal
	var inteiro = parseInt(valorString.substring(0, valorString.length - decimalPlaces)) || 0;
	var decimal = parseInt(valorString.substring(valorString.length - decimalPlaces)) || 0;

	let decimal_max = "";
	for (let i = 0; i < decimalPlaces; i++) { decimal_max += `9`; };

	// Limitar a parte decimal a duas casas decimais
	if (decimal > parseInt(decimal_max)) { decimal = parseInt(decimal_max); }

	let decimal_min = "";
	for (let i = 0; i < decimalPlaces; i++) {
		if (i == 0) {
			decimal_min += `1`;
		} else {
			decimal_min += `0`;
		}
	};

	let decimal_string = decimal.toString();

	let decimal_fill = "";
	for (let i = 0; i < decimalPlaces - decimal_string.length; i++) {
		decimal_fill += `0`;
	};

	// Atualizar o valor do input com a parte inteira e parte decimal separadas por um ponto
	input.value = inteiro + '.' + (decimal < parseInt(decimal_min) ? decimal_fill : '') + decimal;
};

lib.tooltip = (element, texto) => {
	// Adiciona a classe "tooltip" ao elemento
	element.classList.add("tooltip");

	// Cria um novo elemento para o tooltip
	const tooltipText = document.createElement("span");
	tooltipText.classList.add("tooltiptext");
	tooltipText.textContent = texto;

	// Adiciona o tooltip ao elemento
	element.appendChild(tooltipText);
}