//the function that gets how many times it clunks 

function clunk(times) 
{
	var num = times;
	while (num > 0) 
	{
		display("clunk");
		num = num - 1;
	}
}
//this function does the thunks and clanks 

function thingamajig(size) 
{
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) 
	{
		display("clank");
	} 
	else if (size == 1) 
	{
		display("thunk");
	} 
	else 
	{
		while (size > 1) 
		{
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}
//this function is going to display and send it to the console

function display(output)
{
	console.log(output);
	clunkCounter = clunkCounter + 1;
	document.write(output);
	document.write("<br>");
}
clunkCounter = 0;
var num = 0;

while (num <= 7) 
		{
			thingamajig(num);
			num += 1;
			console.log(clunkCounter);
			document.write(clunkCounter);
			document.write("<br>");
		}
		
