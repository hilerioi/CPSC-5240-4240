function initXHR(x) {
	console.log(x);
	if (x == 'home') {
		document.getElementById("home").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
	}
	else if (x == 'lists') {
		retrieveActiveListsFromServer('/json/lists.json');
		document.getElementById("home").style.display = "none";
		document.getElementById("lists").style.display = "block";
		document.getElementById("gList").style.display = "none";		
	}
	else if (x == 'gList') {
		document.getElementById("home").style.display = "none";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "block";
	}
	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
	}
}

function initXHR2() {
	retrieveTransportationListsFromServer('/all/json');	
}

function retrieveActiveListsFromServer(url) {
	var xmlhttp = new XMLHttpRequest();
	var lists;

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var lists = JSON.parse(xmlhttp.responseText);
			console.log(lists);
			populateListsView('lists', lists);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function populateListsView(elementId, lists) {
	element = document.getElementById(elementId);
	var newElement = "<h3 class=\"panel-heading\">Active Lists</h3>";

	for (var i = 0; i < lists.length; i++) {
		newElement += "<div class=\"panel panel-default\">";
		newElement += "<h4 class=\"panel-heading\"><a href=\"javascript:init('gList')\">" + (i+1) + ". " + lists[i].name + "</a></h4>";
		newElement += "<div class=\"panel-body\">";
		newElement += "<p>" + lists[i].description  + "</p>";
		newElement += "</div>";
		newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
		newElement += "<tbody>";
		newElement += "<tr>";
		newElement += "<td>Due: <span>" + lists[i].due + "</span></td>";
		newElement += "<td align=\"right\">Items: <span class=\"badge\">" + lists[i].items + "</span></td>";
		newElement += "</tr>";
		newElement += "</tbody>";
		newElement += "</table>";
		newElement += "</div>";
	}

	element.innerHTML = newElement;
}

function retrieveTransportationListsFromServer(url) {
	var xmlhttp = new XMLHttpRequest();
	var lists;

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var lists = JSON.parse(xmlhttp.responseText);
			console.log(lists);
			populateTransportView('transport', lists);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function populateTransportView(elementId, lists) {
	element = document.getElementById(elementId);
	var newElement = "<h3 class=\"panel-heading\">Transportation Lists</h3>";

	for (var i = 0; i < lists.length; i++) {
		newElement += "<div class=\"panel panel-default\">";
		newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
		newElement += "<tbody>";
		newElement += "<tr>";
		newElement += "<td>Vehicle Name: <span>" + lists[i].vehicle + "</span></td>";
		newElement += "<td align=\"right\">Speed: <span class=\"badge\">" + lists[i].speed + "</span></td>";
		newElement += "</tr>";
		newElement += "</tbody>";
		newElement += "</table>";
		newElement += "</div>";
	}

	element.innerHTML = newElement;
}
