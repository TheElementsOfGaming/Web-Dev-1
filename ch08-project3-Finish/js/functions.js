/* add your functions here */
function Book(isbn, title, description, universities) {
	this.isbn = isbn;
	this.title = title;
	this.description = description;
	this.universities = universities;
}

Book.prototype.outputCard = function() {
 	let b = books[i];
 	document.write('<div class="mdl-cell mdl-card mdl-shadow--2dp">');
 	document.write('<div class="mdl-card__media">');
	document.write('<img src="images/' + b.isbn + '.jpg" title="' + b.title + '">');
	document.write('</div>')
	document.write('<div class="mdl-card__supporting-text">');
	document.write('<p>' + b.description + '<p>');
	document.write('<h6>Adopters</h6>');
	document.write('<ul>');
	function outputUni() {
		for (var j = 0; j < b.universities.length; j++) {
			document.write('<li>' + b.universities[j] + '</li>');
		}
	}
	outputUni();
	document.write('</ul>');
	document.write('</div>');
	document.write('<div class="mdl-card__actions mdl-card--border">');
	document.write('<a class="mdl-button">READ MORE</a>');
	document.write('</div>');
	document.write('</div>');
};
