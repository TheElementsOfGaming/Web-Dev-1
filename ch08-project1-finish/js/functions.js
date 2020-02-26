/* define functions here */
function calculateTotal(quantity, price) {
	return quantity * price;
}

function outputCartRow(file, title, quantity, price) {
	document.write("<tr>");
	document.write("<td>");
	document.write("<img src= images/" + filenames[file] + ">");
	document.write("</td>");
	document.write("<td>");
	document.write(titles[title]);
	document.write("</td>");
	document.write('<td class="center">');
	document.write(quantities[quantity]);
	document.write("</td>");
	document.write('<td class="right">');
	document.write("$" + prices[price].toFixed(2));
	document.write("</td>");
	document.write('<td class="right">');
	document.write("$" + calculateTotal(quantities[quantity], prices[price]).toFixed(2));
	document.write("</td>");
	document.write("</tr>");
}

function shipping(subtotal){
	if (subtotal > 1000) {
		return 0;
	}
	else {
		return 40;
	}
}

function subtotal(){
	var total = 0;
	for (var i = 0; i < 3; i++) {
		total += prices[i]*quantities[i];
	}
	return total;
}

function tax(){
	const taxAmount = 0.10;
	var tax = subtotal() * taxAmount;
	return tax;
}

function outputGrandTotal(subtotal, tax, shipping){
	var grandTotal = shipping + subtotal + tax;
	console.log(grandTotal);
	return grandTotal;
}

