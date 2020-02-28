/* add in your functions here */
function outputCountryBox(name, continent, cities, photos) {
	for (var i = 0; i < countries.length; i++) {
		document.write('<div class="item">');
		document.write("<h2>" + countries[i].name + "</h2>");
		document.write("<p>" + countries[i].continent + "</p>");
		document.write('<div class="inner-box">')
		outputCities();
		document.write('<div class="inner-box">')
		outputPhotos();
		function outputCities() {;
			document.write("<h3>Cities</h3>");
			document.write("<ul>");
			for (var j = 0; j < countries[i].cities.length; j++) {
				document.write("<li>" + countries[i].cities[j] + "</li>");
			}
			document.write("</ul>");
			document.write("</div>");
		}
		function outputPhotos() {
			document.write("<h3>Popular Photos</h3>");
			for (var j = 0; j < countries[i].photos.length; j++){
				document.write('<img src="images/' + countries[i].photos[j] + '" class="photo">');
			}
		}
		document.write("</div>");
		document.write("<button>Visit</button>");
		document.write("</div>");
	}
}

outputCountryBox();