/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
for (var i = 0; i < prices.length; i++) {
	outputCartRow(i, i, i, i,);
}

document.write('<tr class = "totals">');
document.write('<td colspan="4">Subtotal</td>');
document.write("<td>" + "$" + subtotal().toFixed(2) + "</td>");
document.write("</tr>");
document.write('<tr class = "totals">');
document.write('<td colspan="4">Tax</td>');
document.write("<td> $" + tax().toFixed(2) + "</td>");
document.write("</tr>")
document.write('<tr class = "totals">');
document.write('<td colspan="4">Shipping</td>');
document.write("<td> $" + shipping(subtotal()).toFixed(2) + "</td>");
document.write("</tr>")
document.write('<tr class = "totals focus">');
document.write('<td colspan="4">Grand Total</td>');
document.write("<td> $" + outputGrandTotal(subtotal(), tax(), shipping(subtotal())).toFixed(2) + "</td>");
document.write("</tr>")