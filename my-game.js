function setup() {
  
	createCanvas(400, 400);

}



function draw() {
  
	background('LAVENDER');

  
  
	noStroke();
  fill('gray');
  
	text("Eye follow you!!", 150, 50);
 
 
  
	noStroke();
  
	fill('#3986f4');
  
	triangle(200, 100, 50, 300, 350, 300);
  
  

	noStroke(); 
  
	fill('#58cdf4');
  
	ellipse(mouseX, mouseY, 100, 100);
  
  

	noStroke();
  
	fill('white');
  
	ellipse(mouseX, mouseY, 100, 50);

  
  
	noStroke();
  
	fill('black');
  
	ellipse(mouseX, mouseY, 50, 50);
  
  
	
	noStroke();
  
	fill('ffffff');
  
	ellipse(mouseX + 13, mouseY - 11, 10, 10);
  

  
	if(mouseIsPressed) {
   
		fill('ffffff');
   
		 ellipse(mouseX, mouseY, 100, 100);
  
	}
  

}