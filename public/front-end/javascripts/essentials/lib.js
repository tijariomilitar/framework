// -------------------
// javascript lib
// -------------------
const lib = {};

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
	let selectedDiv = document.getElementById(div);

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
lib.Carousel = (id) => {
	const carousel = document.querySelector(`#${id}`);
	const slides = carousel.querySelectorAll('.carousel-slides img');
	let slideIndex = 0;

	slides.forEach((slide) => {
		slide.style.display = "none";
		slide.draggable = false;
	});

	const showSlides = (n) => {
		slides.forEach((slide) => {
			slide.style.display = "none";
			slide.style.transform = "translateX(0)";
		});
		slides[n].style.display = "block";
	};

	const plusSlides = (n) => {
		slideIndex += n;
		if (slideIndex >= slides.length) {
			slideIndex = 0;
		}
		if (slideIndex < 0) {
			slideIndex = slides.length - 1;
		}
		showSlides(slideIndex);
	};

	const prev = document.createElement('a');
	prev.classList.add('carousel-prev');
	prev.innerHTML = "&#10094;";
	prev.addEventListener('click', () => {
		plusSlides(-1);
	});
	carousel.appendChild(prev);

	const next = document.createElement('a');
	next.classList.add('carousel-next');
	next.innerHTML = "&#10095;";
	next.addEventListener('click', () => {
		plusSlides(1);
	});
	carousel.appendChild(next);

	// mouse image changer
	let mouseDownX;
	let deltaX;

	carousel.addEventListener('mousedown', (event) => {
		mouseDownX = event.clientX;
		isDragging = true;
	});

	carousel.addEventListener('mousemove', (event) => {
		if (!isDragging) { return; }

		const mouseMoveX = event.clientX;
		deltaX = mouseMoveX - mouseDownX;
		slides[slideIndex].style.transform = `translateX(${deltaX}px)`;
	});

	carousel.addEventListener('mouseleave', (event) => {
		if (isDragging) {
			const mouseMoveX = event.clientX;
			const deltaX = mouseMoveX - mouseDownX;
			if (Math.abs(deltaX) > 10) {
				if (deltaX > 0) {
					plusSlides(-1);
				} else {
					plusSlides(1);
				}
			}
		}
		isDragging = false;
	});

	carousel.addEventListener('mouseout', (event) => {
		if (isDragging) {
			const mouseMoveX = event.clientX;
			const deltaX = mouseMoveX - mouseDownX;
			if (Math.abs(deltaX) > 10) {
				if (deltaX > 0) {
					plusSlides(-1);
				} else {
					plusSlides(1);
				}
			}
		}
		isDragging = false;
	});

	carousel.addEventListener('mouseup', () => {
		if (!isDragging) { return; }

		isDragging = false;

		if (Math.abs(deltaX) > 10) {
			if (deltaX > 0) {
				plusSlides(-1);
			} else {
				plusSlides(1);
			}
		}
		slides[slideIndex].style.transform = "translateX(0)";
	});

	// finger touch mobile
	let startX;
	let isDragging = false;

	carousel.addEventListener('touchstart', (event) => {
		startX = event.touches[0].clientX;
		isDragging = true;
	});

	carousel.addEventListener('touchmove', (event) => {
		if (!isDragging) {
			return;
		}
		const touchMoveX = event.touches[0].clientX;
		const deltaX = touchMoveX - startX;
		if (Math.abs(deltaX) > 10) {
			isDragging = false;
			if (deltaX > 0) {
				plusSlides(-1);
			} else {
				plusSlides(1);
			}
		}
	});

	carousel.addEventListener('touchend', () => {
		isDragging = false;
	});

	showSlides(0);
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

lib.hasForbiddenChar = (url) => { // Adiciona um evento de input no input
	const forbiddenChars = /[#%&{}\s\\<>*?/$!'":@+,`|[\]^~();¨´áéíóúâêîôûàèìòùäëïöü]/g;
	const hasForbiddenChar = forbiddenChars.test(url); // Testa se há algum símbolo proibido no valor

	if (hasForbiddenChar) {
		return true;
	} else {
		return false;
	}
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

lib.dropdown.input = (objects, input, content, props) => {
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
		};

		content.appendChild(item);
	});

	document.addEventListener('click', function (event) {
		const dropdownContent = document.querySelector('.dropdown-content');
		if (dropdownContent.style.display === 'block') {
			dropdownContent.style.display = 'none';
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

lib.image.zoom = (e) => {
	if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
		let touch = e.touches[0] || e.changedTouches[0];
		let bcr = e.target.getBoundingClientRect();
		let offsetX = touch.clientX - bcr.left;
		let offsetY = touch.clientY - bcr.top;

		let zoomer = e.currentTarget;
		x = offsetX / zoomer.offsetWidth * 100;
		y = offsetY / zoomer.offsetHeight * 100;
		zoomer.style.backgroundPosition = x + '% ' + y + '%';
	} else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
		let zoomer = e.currentTarget;
		e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
		e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageY;
		x = offsetX / zoomer.offsetWidth * 100;
		y = offsetY / zoomer.offsetHeight * 100;
		zoomer.style.backgroundPosition = x + '% ' + y + '%';
	}
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

	if (value) { element.innerHTML = value; }

	return element;
};

lib.element.icon = (box, size, src, action) => {
	let div = lib.element.create("div", { class: "mobile-box " + box + " center" });
	let img = lib.element.create("img", {
		class: "size-" + size + " icon noselect",
		src: src,
		onclick: action
	});
	div.appendChild(img);
	return div;
};

lib.element.info = (box, param, paramValue) => {
	let divParent = lib.element.create("div", { class: "mobile-box " + box + " container border padding-5 margin-top-5" });
	let divParam = lib.element.create("div", { class: "mobile-box b1 em06" }, param);
	let divValue = lib.element.create("div", { class: "mobile-box b1" }, paramValue);

	divParent.appendChild(divParam);
	divParent.appendChild(divValue);
	return divParent;
};

lib.element.createInfo = (css, param, paramValue) => {
	let divParent = lib.element.create("div", { class: css });
	let divParam = lib.element.create("div", { class: "mobile-box b1 em06" }, param);
	let divValue = lib.element.create("div", { class: "mobile-box b1" }, paramValue);

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