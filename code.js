var word = "bottles";
var count = 99;
while (count > 0) {
	document.write(count + " " + word + " of soda on the wall");
	document.write("<br>");
	document.write(count + " " + word + " of soda,");
	document.write("<br>");
	document.write("Take one down, pass it around,");
	document.write("<br>");
	count = count - 1;
		if (count > 0) 
			{
				document.write(count + " " + word + " of soda on the wall.");
				document.write("<br>");
			} 
		else 
			{
				document.write("No more " + word + " of soda on the wall.");
				document.write("<br>");
			}
 }

