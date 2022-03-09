// -------------------
// javascript lib
// -------------------
const lib = {
	genDate: function(){
		let d = new Date();
		let date = "";
		if(d.getDate()<10 && parseInt(d.getMonth())+1>9){
			date = "0"+d.getDate()+"-"+(parseInt(d.getMonth())+1)+"-"+d.getFullYear();
		} else if(d.getDate()>9 && parseInt(d.getMonth())+1<10){
			date = ""+d.getDate()+"-0"+(parseInt(d.getMonth())+1)+"-"+d.getFullYear();
		} else if(parseInt(d.getDate())<10 && parseInt(d.getMonth())+1<10){
			date = "0"+d.getDate()+"-0"+(parseInt(d.getMonth())+1)+"-"+d.getFullYear();
		} else {
			date = ""+d.getDate()+"-"+parseInt(d.getMonth()+1)+"-"+d.getFullYear();
		};
		return date;
	},
	genPatternDate: function(){
		let d = new Date();
		let date = "";
		if(d.getDate()<10 && parseInt(d.getMonth())+1>9){
			date = ""+d.getFullYear()+"-"+(parseInt(d.getMonth())+1)+"-0"+d.getDate();
		} else if(d.getDate()>9 && parseInt(d.getMonth())+1<10){
			date = ""+d.getFullYear()+"-0"+(parseInt(d.getMonth())+1)+"-"+d.getDate();
		} else if(parseInt(d.getDate())<10 && parseInt(d.getMonth())+1<10){
			date = ""+d.getFullYear()+"-0"+(parseInt(d.getMonth())+1)+"-0"+d.getDate();
		} else {
			date = ""+d.getFullYear()+"-"+parseInt(d.getMonth()+1)+"-"+d.getDate();
		};
		return date;
	},
	genFullDate: function(){
		let d = new Date();
		let date = "";
		if(d.getDate()<10 && parseInt(d.getMonth())+1>9){
			date = "0"+d.getDate()+"-"+(parseInt(d.getMonth())+1)+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
		} else if(d.getDate()>9 && parseInt(d.getMonth())+1<10){
			date = ""+d.getDate()+"-0"+(parseInt(d.getMonth())+1)+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
		} else if(parseInt(d.getDate())<10 && parseInt(d.getMonth())+1<10){
			date = "0"+d.getDate()+"-0"+(parseInt(d.getMonth())+1)+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
		} else {
			date = ""+d.getDate()+"-"+parseInt(d.getMonth()+1)+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
		};
		return date;
	},
	genTimestamp: function(){
		const currentDate = new Date();
		const timestamp = currentDate.getTime();
		return timestamp;
	},
	convertDate:function(date){
		if(date){
			let str = date.split('-');
			if(str!=""){
				var convertedDate = str[2]+"-"+str[1]+"-"+str[0];
			} else {
				var convertedDate = "";
			};
			return convertedDate;
		};
		return false;
	},
	convertDatetime: function(datetime){
		if(datetime){
			let str = datetime.split('T');
			if(str!=""){
				var convertedDate = lib.convertDate(str[0])+" "+str[1];
			} else {
				var convertedDate = "";
			};
			return convertedDate;
		};
		return false;
	},
	dateToTimestamp: (date) => {
		if(date){
			let splited_date = date.split('-');
			splited_date.year = splited_date[0];
			splited_date.month = splited_date[1];
			splited_date.day = splited_date[2];
			date = new Date(splited_date.year, (splited_date.month-1), splited_date.day);
			return date.getTime();
		};
		return false;
	},
	patterndateToTimestamp: (date) => {
		if(date){
			let splited_date = date.split('-');
			splited_date.year = splited_date[0];
			splited_date.month = splited_date[1];
			splited_date.day = splited_date[2];
			console.log(splited_date);
			date = new Date(splited_date.year, (splited_date.month-1), splited_date.day);
			return date.getTime();
		};
		return false;
	},
	fulldateToTimestamp: (fulldate) => {
		if(fulldate){
			let date = fulldate.split("-");
			date.day = date[0];
			date.month = date[1];
			date.year = date[2];
			date.hour = date[3].split(":")[0];
			date.minute = date[3].split(":")[1];
			date = new Date(date.year,date.month-1,date.day,date.hour,date.minute);
			return date.getTime();
		}
		return false;
	},
	datetimeToTimestamp: (datetime) => {
		if(datetime){
			let date = datetime.split("T");
			date.year = date[0].split("-")[0];
			date.month = date[0].split("-")[1];
			date.day = date[0].split("-")[2];
			date.hour = date[1].split(":")[0];
			date.minute = date[1].split(":")[1];
			date = new Date(date.year,date.month-1,date.day,date.hour,date.minute);
			return date.getTime();
		}
		return false;
	},
	fulldateToDatetime: () => {
		return null;
	},
	timestampDay: () => { return 86400000; },
	timestampToDate: (timestamp) => {
		if(timestamp){
			let date = new Date(parseInt(timestamp));
			let day;let month;let hour;let minute;
			if(date.getDate() < 10){ day = "0"+date.getDate() } else { day = date.getDate() };
			if(date.getMonth() < 9){ month = "0"+(date.getMonth()+1) } else { month = (date.getMonth()+1) };
			if(date.getHours() < 10){ hour = "0"+date.getHours() } else { hour = date.getHours() };
			if(date.getMinutes() < 10){ minute = "0"+date.getMinutes() } else { minute = date.getMinutes() };
			return day+'-'+month+'-'+date.getFullYear();
		};
		return false;
	},
	timestampToFulldate: (timestamp) => {
		if(timestamp){
			let date = new Date(parseInt(timestamp));
			let day;let month;let hour;let minute;
			if(date.getDate() < 10){ day = "0"+date.getDate() } else { day = date.getDate() };
			if(date.getMonth() < 9){ month = "0"+(date.getMonth()+1) } else { month = (date.getMonth()+1) };
			if(date.getHours() < 10){ hour = "0"+date.getHours() } else { hour = date.getHours() };
			if(date.getMinutes() < 10){ minute = "0"+date.getMinutes() } else { minute = date.getMinutes() };
			return day+'-'+month+'-'+date.getFullYear()+' '+hour+':'+minute;
		};
		return false;
	},
	timestampToDatetime: (timestamp) => {
		if(timestamp){
			let date = new Date(parseInt(timestamp));
			let day;let month;let hour;let minute;
			if(date.getDate() < 10){ day = "0"+date.getDate() } else { day = date.getDate() };
			if(date.getMonth() < 9){ month = "0"+(date.getMonth()+1) } else { month = (date.getMonth()+1) };
			if(date.getHours() < 10){ hour = "0"+date.getHours() } else { hour = date.getHours() };
			if(date.getMinutes() < 10){ minute = "0"+date.getMinutes() } else { minute = date.getMinutes() };
			return date.getFullYear()+'-'+month+'-'+day+'T'+hour+':'+minute;
		};
		return false;
	},
	fillDateInput: function(input){
		return input.valueAsDate = new Date();
	},
	fillDatetimeInput: (input) => {
        let date = new Date();
        let day;let month;let hour;let minute;
        if(date.getDate() < 10){ day = "0"+date.getDate() } else { day = date.getDate() };
        if(date.getMonth() < 10){ month = "0"+(date.getMonth()+1) } else { month = (date.getMonth()+1) };
        if(date.getHours() < 10){ hour = "0"+date.getHours() } else { hour = date.getHours() };
        if(date.getMinutes() < 10){ minute = "0"+date.getMinutes() } else { minute = date.getMinutes() };
        return input.value = date.getFullYear()+'-'+month+'-'+day+'T'+hour+':'+minute;
    },
	colectByMonth: function(month, dates){
		let array = [];
		let str = [];
		for(i in dates){
			str = dates[i].date.split('-');
			if(parseInt(str[1])==parseInt(month)){
				array.push(dates[i]);
			};
		};
		return array;
	},

	//Math
	roundToInt: (num, places) => {
		return (parseFloat(num).toFixed(places));
	},
	roundValue: function(value){
		return Math.round((value) * 100) / 100;
	},
	// html/css lib
	displayDiv: (div, button, openEl, closeEl) => {
		let selectedDiv = document.getElementById(div);
			
		if(button.nodeName == "IMG"){
			if(selectedDiv.style.display == "none"){
				if(button && openEl && closeEl){ button.src = closeEl; };
				selectedDiv.style.display = "";
			} else if(selectedDiv.style.display == ""){
				if(button && openEl && closeEl){ button.src = openEl; };
				selectedDiv.style.display = "none";
			};
		} else {
			if(selectedDiv.style.display == "none"){
				if(button && openEl && closeEl){ button.innerHTML = closeEl; };
				selectedDiv.style.display = "";
			} else if(selectedDiv.style.display == ""){
				if(button && openEl && closeEl){ button.innerHTML = openEl; };
				selectedDiv.style.display = "none";
			};
		}
	},
	clearInnerHtml: (target) => {
		target.innerHTML = "";
	},
	displayMenuText: (button, openText, closeText) => {
		if(button.innerHTML == openText){ button.innerHTML = closeText ;} 
		else if(button.innerHTML == closeText){ button.innerHTML = openText; };
	},
	clearTable(table, location){
		document.getElementById(table).innerHTML = "NENHUM REGISTRO ENCONTRADO";
		$('#'+location+'Previous').prop('disabled');
		$('#'+location+'Next').prop('disabled');
		$('#'+location+'PageNumber').text('0');
	},
	noRecord(table){
		document.getElementById(table).innerHTML = "NENHUM REGISTRO ENCONTRADO";
	},
	fillSelect(selectLocation, location, route, method){
		$.ajax({
			url: route,
			method: method,
			success: (response) => {
				var select = document.getElementById(location);
				select.innerHTML = "";
				select.innerHTML += "<option value='0'>"+selectLocation+"</option>"
				for(i in response){
					select.innerHTML += "<option value='"+response[i].id+"'>"+response[i].name+"</option>"
				};
			}
		});
	},
	findCheckedRadios: (radio_name) => {
		let radios = document.getElementsByName(radio_name);
		for(let i in radios){
			if(radios[i].checked){
				return radios[i];
			};
		};
		radios = false;
		radios.value = false;
		return radios;
	},
	splitTextBy: (text, split_string) => {
		if(text && split_string){
			let splited_text = text.split(split_string);
			return splited_text;
		};
		return false;
	},
	splitSelectTextBy: (select, string) => {
		if(select && string){
			let row = select.options[select.selectedIndex].text;
			let splited_text = row.split(string);
			splited_text.select = { value: select.value };
			return splited_text;
		};
		return false;
	},
	capitalizeFirst: (words) => {
		let separateWord = words.toLowerCase().split(' ');
		for (let i=0;i<separateWord.length;i++) {
			separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
			separateWord[i].substring(1);
		};
		return separateWord.join(' ');
	},
	clearSelect(select){
		select.innerHTML = "";
		select.innerHTML += "<option value='0'>Sem resultados</option>"
	},
	focus(input){
		if(input.id){
			document.getElementById(input.id).focus();
		} else {
			input.focus();
		};
	},
	carousel: {
		// server data carousel
		render: (carousel_name) => {
			let slides = document.querySelectorAll("[data-js='"+carousel_name+"']");
	        let prevButton = document.querySelector("[data-js='"+carousel_name+"-prev']");
	        let pageDiv = document.querySelector("[data-js='"+carousel_name+"-page']");
	        let nextButton = document.querySelector("[data-js='"+carousel_name+"-next']");

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
		},
		// fetch data carousel
		execute: (box, render, response, pagination) => {
			document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").onclick = function(){
				window.scrollTo(0, document.getElementById(box).getBoundingClientRect().top - document.body.getBoundingClientRect().top);
		        if(pagination.page > 0){
		            pagination.page--;
		            lib.carousel.paging(render, response, pagination);
		            lib.carousel.navigation(box, response, pagination);
		        };
		    };

		    document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").onclick = function(){
				window.scrollTo(0, document.getElementById(box).getBoundingClientRect().top - document.body.getBoundingClientRect().top);
		        if(pagination.page < response.length / pagination.pageSize - 1){
		            pagination.page++;
		            lib.carousel.paging(render, response, pagination);
		            lib.carousel.navigation(box, response, pagination);
		        };
		    };
		    lib.carousel.paging(render, response, pagination);
		    lib.carousel.navigation(box, response, pagination);
		},
		paging: (render, response, pagination) => {
			render(response, pagination);
		},
		navigation: (box, response, pagination) => {
			if(!response.length){
				document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = true;
				document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = " 0 ";
				document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = true;
			};

			if(response.length && response.length <= pagination.pageSize){
				document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = true;
				document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = "1 de 1";
				document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = true;
			};

			if(response.length > pagination.pageSize){
				if(pagination.page <= 0){
					pagination.page = 0;
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = true;
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = ""+ (pagination.page + 1) + " de " + Math.ceil(response.length / pagination.pageSize);
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = false;
				};

				if(pagination.page > 0 && pagination.page < (response.length / pagination.pageSize) - 1){
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = false;
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = ""+ (pagination.page + 1) + " de " + Math.ceil(response.length / pagination.pageSize);
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = false;
				};

				if(pagination.page >= (response.length / pagination.pageSize) - 1){
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-previous").disabled = false;
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-page").innerHTML = ""+ (pagination.page + 1) + " de " + Math.ceil(response.length / pagination.pageSize);
					document.getElementById(box).children.namedItem("carousel-navigation").children.namedItem("carousel-next").disabled = true;
				};
			};
		}
	},
	
	// Canvas
	rect: (ctx,c,x,y,w,h) => {
		ctx.fillStyle = c;
		ctx.beginPath();
	    ctx.rect(x,y,w,h);
	    ctx.closePath();
	    ctx.fill();
	},
	drawRects: (ctx, rects) => {
		for(i in rects){
            ctx.fillStyle=rects[i].color;
            lib.rect(ctx, rects[i].x, rects[i].y, rects[i].width, rects[i].height);
        };
	},
	collide: (r1,r2) => {
		let dx=(r1.x+r1.width/2)-(r2.x+r2.width/2);
		let dy=(r1.y+r1.height/2)-(r2.y+r2.height/2);
		let width = (r1.width+r2.width)/2;
		let height = (r1.height+r2.height)/2;
		let crossWidth=width*dy;
		let crossHeight=height*dx;
		let collision='none';
		//
		if(Math.abs(dx) <= width && Math.abs(dy)<=height){
			if(crossWidth > crossHeight){
				collision = (crossWidth>(-crossHeight))?'bottom':'left';
			} else {
				collision = (crossWidth>-(crossHeight))?'right':'top';
			}
		}
		return(collision);
	}
};

lib.index = {
	last: (objects) => {
		return objects.length - 1;
	}
};

lib.sort = (arr, key, order) => {
	return arr = arr.sort((a, b) => {
		if(order == "desc"){
			return b[key] - a[key];
		} else {
			return a[key] - b[key];
		}
	}); 
};

lib.removeChar = (string, regex) => {
	for(let i in regex){ string = string.replaceAll(regex[i], ""); };
	return string;
};

lib.replaceChar = (string, regex, content) => {
	string = string.replaceAll(regex, content);
	return string;
};

lib.formatHTML = (string) => {
	string = string.replaceAll('<', '&lt;');
	string = string.replaceAll('>', '&gt;');

	let html = "";
	html += "<pre class='box b1 em09'><code>";
	html += string;
	html += "</code></pre>";
	return html;
};

lib.dropdown = {
	render: (objects, input_id, dropdown_id, target, key, props) => {
		if(objects.length){
			let html = "";
			for(i in objects){
				html += "<li><input type='button' class='box b1 box-hover wrapper padding-10 border' data-id='"+objects[i][key]+"' value='";
				for(j in props){
					if(props.length-1 > j){
						html += objects[i][props[j]]+" | ";
					} else if(props.length-1 == j){
						html += objects[i][props[j]];
					};
				};
				html += "' onclick='lib.dropdown.fill."+target+"(this, `"+input_id+"`, `"+dropdown_id+"`)'></li>";
			};
			document.getElementById(dropdown_id).innerHTML = html;
		} else {
			document.getElementById(dropdown_id).innerHTML = "";
		};
	},
	fill: {
		input: (dropdown_input, input_id, dropdown_id) => {
			document.getElementById(input_id).dataset.id = dropdown_input.dataset.id;
			document.getElementById(input_id).value = dropdown_input.value;
			document.getElementById(input_id).readOnly = true;

			document.getElementById(dropdown_id).innerHTML = "";
		}
	}
};

lib.address = {
	get: async (CEP) => {
		let response = await fetch("https://viacep.com.br/ws/"+CEP+"/json/");
		response = await response.json();

		if(API.verifyResponse(response)){ return false };
		
		return response;
	},
	fillForm:async (cep, form) => {
		let address = await lib.address.get(cep);
		if(address.logradouro){ document.getElementById(form).elements.namedItem("street").value = address.logradouro; };
		if(address.complemento){ document.getElementById(form).elements.namedItem("complement").value = address.complemento; };
		if(address.bairro){ document.getElementById(form).elements.namedItem("neighborhood").value = address.bairro; };
		if(address.localidade){ document.getElementById(form).elements.namedItem("city").value = address.localidade; };
		if(address.uf){ document.getElementById(form).elements.namedItem("state").value = address.uf; };
	}
};

lib.eventEmmiter = (element, event) => {
	let e = new Event(event);
	element.dispatchEvent(e);
};

lib.copyToClipboard = (output, element, regex) => {
	let text;
	if(output && element){ text = document.getElementById(output).elements.namedItem(element); } 
	else if(output && !element){ text = document.getElementById(output); } 
	else { alert("Texto inválido!"); return false; }
	text.value = lib.removeChar(text.value, regex);
	text.select();
	document.execCommand("copy");
	alert("Copiado para área de transferência");
	return true;
};

lib.openExternalLink = (url) => {
	if('http'.substr(0, 4) == url.substr(0, 4)){
		window.open(url, '_blank');
	} else {
		url = "https://"+url;
		window.open(url, '_blank');
	};
};

lib.kart = function(name, variable, props){
	this.name = name;
	this.variable = variable;
	this.items = [];
	this.props = props;

	this.insert = function(key, item) {
		if(key){
			for(let i in this.items){
				if(this.items[i][key] == item[key]){
					alert("Você já incluiu este produto no carrinho.");
					return false;
				};
			};
		};

		this.items.push(item);
		this.update(key);

		let stringified_kart = JSON.stringify(this.items);
		// lib.localStorage.update(this.name, stringified_kart);

		return true;
	};

	this.list = function(kart, props){
		if(this.items.length){
			let html = "";
			html += "<tr>";
			for(i in props){
				html += "<td class='padding-5 center em06'>"+Object.entries(props[i])[0][1]+"</td>";
			};
			html += "</tr>";
			for(i in this.items){
				html += "<tr class='border'>";
				for(j in props){
					if(j == 0){
						html += "<td class='padding-5 em09'>"+this.items[i][Object.entries(props[j])[0][0]]+"</td>";
					} else {
						html += "<td class='padding-5 em09'>"+this.items[i][Object.entries(props[j])[0][0]]+"</td>";
					};
				};
				html += "<td class='padding-3'><img class='size-15 icon padding-3 pointer' src='/images/icon/decrease.png' onclick='"+this.variable+".decrease("+this.items[i].id+")'></td>";
				html += "<td><input type='text' id='"+this.variable+"-"+this.items[i].id+"' class='width-50 em11 border-bottom center' onchange='"+this.variable+".updateAmount("+this.items[i].id+", this.value);lib.focus(this)' value='"+this.items[i].amount+"'></td>";
				html += "<td class='padding-3'><img class='size-15 icon padding-3 pointer' src='/images/icon/increase.png' onclick='"+this.variable+".increase("+this.items[i].id+")'></td>";
				html += "<td class='padding-3'><img class='size-20 icon padding-3 pointer' src='/images/icon/trash.png' onclick='"+this.variable+".remove("+this.items[i].id+")'></td>";
				html += "</tr>";
			};
			document.getElementById(this.name+"-table").innerHTML = html;
		} else {
			document.getElementById(this.name+"-table").innerHTML = "";
		};
	};
	
	this.update = function(key) {
		return this.items = this.items.sort((a, b) => {
			return a[key] - b[key];
		});
	};

	this.decrease = (obj_id) => {
		for(i in this.items){
			if(this.items[i].id == obj_id && this.items[i].amount > 1){
				this.items[i].amount -= 1;
			};
		};
		let stringified_kart = JSON.stringify(this.items);
		// lib.localStorage.update(this.name, stringified_kart);
		this.list(this.variable, this.props);
	};

	this.increase = (obj_id) => {
		for(let i in this.items){
			if(this.items[i].id == obj_id){
				this.items[i].amount += 1;
			};
		};
		let stringified_kart = JSON.stringify(this.items);
		// lib.localStorage.update(this.name, stringified_kart);
		this.list(this.variable, this.props);
	};

	this.remove = (obj_id) => {
		var kart_backup = [];
		for(let i in this.items){
			if(this.items[i].id != obj_id){
				kart_backup.push(this.items[i]);
			};
		};

		this.items = kart_backup;

		let stringified_kart = JSON.stringify(this.items);
		// lib.localStorage.update(this.name, stringified_kart);
		if(this.items.length == 0){ lib.localStorage.remove(this.name)};
		this.list(this.variable, this.props);
	};

	this.updateAmount = async (obj_id, amount) => {
		if(amount < 1 || isNaN(amount)){
			alert("Quantidade Inválida");
			return this.list(this.variable, this.props);
		};

		for(i in this.items){
			if(this.items[i].id == obj_id){
				this.items[i].amount = parseInt(amount);
				
				let stringified_kart = JSON.stringify(this.items);
				// lib.localStorage.update(this.name, stringified_kart);

				return this.list(this.variable, this.props);
			};
		};
	};
};

lib.localStorage = {
	verify: (item) => {
		if(localStorage.getItem(item) != null){
			return true;
		};
		return false;
	},
	update: (item, stringified_object) => {
		localStorage.setItem(item, stringified_object);
	},
	remove: (item) => {
		localStorage.removeItem(item);
	}
};

lib.image = {
	zoom: (e) => {
	    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
	    	let touch = e.touches[0] || e.changedTouches[0];
	    	let bcr = e.target.getBoundingClientRect();
			let offsetX = touch.clientX - bcr.left;
			let offsetY = touch.clientY - bcr.top;
			
			let zoomer = e.currentTarget;
			x = offsetX/zoomer.offsetWidth*100;
			y = offsetY/zoomer.offsetHeight*100;
			zoomer.style.backgroundPosition = x + '% ' + y + '%';
	    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
			let zoomer = e.currentTarget;
			e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
			e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageY;
			x = offsetX/zoomer.offsetWidth*100;
			y = offsetY/zoomer.offsetHeight*100;
			zoomer.style.backgroundPosition = x + '% ' + y + '%';
	    }
	}
};

lib.ruleOfThree = (index, target, sample) => {
	if(index && target && sample){
		return ((target * sample)/index);
	};
	return false;
};

lib.updateCssVariable = (origin, variable, content) => {
	let root = document.querySelector(origin).style;
	root.setProperty(variable, content);
};

lib.disable = (element, state) => {
	if(element.tagName){
		return element.disabled = state;
	};
	document.getElementById(element).disabled = state;
};

lib.display = (element, state) => {
	if(element.tagName){
		return element.style.display = state;
	};
	document.getElementById(element).style.display = state;
};

lib.element = {};

lib.element.create = (elementName, attributes, value) => {
	let element = document.createElement(elementName);
	let attributesAsArray = Object.entries(attributes);

	attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value));

	if(value){ element.innerHTML = value; }

	return element;
};

lib.element.icon = (box, size, src, action) => {
	let div = lib.element.create("div", { class: "mobile-box "+box+" center" });
	let img = lib.element.create("img", {
		class: "size-"+size+" icon noselect",
		src: src,
		onclick: action
	});
	div.appendChild(img);
	return div;
};

lib.element.info = (box, param, paramValue) => {
	let divParent = lib.element.create("div", { class: "mobile-box "+box+" container border padding-5 margin-top-5" });
	let divParam = lib.element.create("div", { class: "mobile-box b1 em06" }, param);
	let divValue = lib.element.create("div", { class: "mobile-box b1" }, paramValue);

	divParent.appendChild(divParam);
	divParent.appendChild(divValue);
	return divParent;
};

lib.element.param = (box, param, element, option) => {
	let divParent = lib.element.create("div", { class: "mobile-box "+box+" container padding-5 margin-top-5" });
	let divInput = lib.element.create("div", { class: "mobile-box b1 em06" }, param);
	let divValue = lib.element.create(element, option);

	divParent.appendChild(divInput);
	divParent.appendChild(divValue);
	return divParent;
};

lib.element.infoInput = (box, param, paramValue, input_id) => {
	let divParent = lib.element.create("div", { class: "mobile-box "+box+" container border padding-5 margin-top-5" });
	let divParam = lib.element.create("div", { class: "mobile-box b1 em06" }, param);
	let divValue = lib.element.create("input", { id: input_id, class: "mobile-box b1" }, paramValue);

	divParent.appendChild(divParam);
	divParent.appendChild(divValue);
	return divParent;
};