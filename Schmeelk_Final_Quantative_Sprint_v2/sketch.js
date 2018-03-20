var circles = [];
var xcount = 1480;
var xaxis = 150; //212
var circle_x = xaxis + 10; // 370;
var circle_y = 665;
var metevent = xaxis - 60;
var lifeevent = xaxis - 45;
var xevent = xaxis - 10;
var canvasWidth = 1000;
var canvasHeight = 20*172*3;

function setup() {
  //createCanvas(1000, 800);
  createCanvas(canvasWidth, canvasHeight);
  var acount = 0;
  var bcount = 0;
  var ccount = 0;
  var ycount = 0;
  var prints = new Object(); // or just {}
  //prints['1480'] = 	1;
  circles.push(new Circle(circle_y-(15*30), circle_x, color('purple')));
  //prints['1485'] = 	170; //drawing 1 under it 
  for (var i=1; i<=170; i++) {
   circles.push(new Circle(circle_y-(15*25), circle_x + (20*i), color('purple')));
  }
  //prints['1490'] = 	1;
  circles.push(new Circle(circle_y-(15*20), circle_x + (20 * 1), color('purple'))); // drawing (red) under it
  //prints['1491'] = 	2;
  circles.push(new Circle(circle_y-(15*19), circle_x, color('purple')));
  for (var i=1; i<=1; i++) {
    circles.push(new Circle(circle_y-(15*19), circle_x + (20*i), color('purple')));
  }
  //prints['1492'] = 	6;
  circles.push(new Circle(circle_y-(15*18), circle_x, color('purple')));
  for (var i=1; i<=5; i++) {
    circles.push(new Circle(circle_y-(15*18), circle_x + (20*i), color('purple')));
  }
  //prints['1493'] = 	7;
  circles.push(new Circle(circle_y-(15*17), circle_x, color('purple')));
  for (var i=1; i<=5; i++) {
    circles.push(new Circle(circle_y-(15*17), circle_x + (20*i), color('purple')));
  }
  //prints['1495'] = 	7;
  circles.push(new Circle(circle_y-(15*15), circle_x, color('purple')));
  for (var i=1; i<=6; i++) {
    circles.push(new Circle(circle_y-(15*15), circle_x + (20*i), color('purple')));
  }
  //prints['1496'] = 	17;
  circles.push(new Circle(circle_y-(15*14), circle_x, color('purple')));
  for (var i=1; i<=16; i++) {
    circles.push(new Circle(circle_y-(15*14), circle_x + (20*i), color('purple')));
  }
  //prints['1497'] = 	13;
  circles.push(new Circle(circle_y-(15*13), circle_x, color('purple')));
  for (var i=1; i<=12; i++) {
    circles.push(new Circle(circle_y-(15*13), circle_x + (20*i), color('purple')));
  }
  //prints['1498'] = 	17;
  circles.push(new Circle(circle_y-(15*12), circle_x, color('purple')));
  for (var i=1; i<=16; i++) {
  circles.push(new Circle(circle_y-(15*12), circle_x + (20*i), color('purple')));
  }
  //prints['1499'] = 	8;
  circles.push(new Circle(circle_y-(15*11), circle_x, color('purple')));
  for (var i=1; i<=7; i++) {
  circles.push(new Circle(circle_y-(15*11), circle_x + (20*i), color('purple')));
  }
  //prints['1500'] = 	11;
   circles.push(new Circle(circle_y-(15*10), circle_x, color('purple')));
  for (var i=1; i<=10; i++) {
  circles.push(new Circle(circle_y-(15*10), circle_x + (20*i), color('purple')));
  }
  //prints['1501'] = 17;
  circles.push(new Circle(circle_y-(15*9), circle_x, color('purple')));
  for (var i=1; i<=16; i++) {
  circles.push(new Circle(circle_y-(15*9), circle_x + (20*i), color('purple')));
  }
  //prints['1502'] = 	10;
  circles.push(new Circle(circle_y-(15*8), circle_x, color('purple')));
  for (var i=1; i<=9; i++) {
  circles.push(new Circle(circle_y-(15*8), circle_x + (20*i), color('purple')));
  }
  //prints['1503'] = 	34;
  //circles.push(new Circle(circle_y-(15*7), circle_x, color('purple')));
  for (var i=2; i<=35; i++) { //2 green under
  circles.push(new Circle(circle_y-(15*7), circle_x + (20*i), color('purple')));
  }
  //prints['1504'] = 	21;
  circles.push(new Circle(circle_y-(15*6), circle_x, color('purple')));
  for (var i=1; i<=20; i++) {
  circles.push(new Circle(circle_y-(15*6), circle_x + (20*i), color('purple')));
  }
  //prints['1505'] = 	9;
  //circles.push(new Circle(circle_y-(15*5), circle_x, color('purple')));
  for (var i=1; i<=9; i++) { //1 under it
  circles.push(new Circle(circle_y-(15*5), circle_x + (20*i), color('purple')));
  }
  //prints['1507'] = 	4;
  circles.push(new Circle(circle_y-(15*3), circle_x, color('purple')));
  for (var i=1; i<=3; i++) {
  circles.push(new Circle(circle_y-(15*3), circle_x + (20*i), color('purple')));
  }
  //prints['1508'] = 	28;
  circles.push(new Circle(circle_y-(15*2), circle_x, color('purple')));
  for (var i=1; i<=27; i++) {
  circles.push(new Circle(circle_y-(15*2), circle_x + (20*i), color('purple')));
  }
  //prints['1509'] = 	31;
  circles.push(new Circle(circle_y-(15*1), circle_x, color('purple')));
  for (var i=1; i<=30; i++) {
  circles.push(new Circle(circle_y-(15*1), circle_x + (20*i), color('purple')));
  }
  //prints['1510'] = 	41;
  for (var i=1; i<=41; i++) { //1 under it
  circles.push(new Circle(circle_y-(15*0), circle_x + (20*i), color('purple')));
  }
  //prints['1511'] = 	56;
  for (var i=1; i<=56; i++) { //1 under it
  circles.push(new Circle(circle_y+(15*1), circle_x + (20*i), color('purple')));
  }
  //prints['1512'] = 	41;
  circles.push(new Circle(circle_y+(15*2), circle_x, color('purple')));
  for (var i=1; i<=40; i++) {
  circles.push(new Circle(circle_y+(15*2), circle_x + (20*i), color('purple')));
  }
  //prints['1513'] = 	18;
  circles.push(new Circle(circle_y+(15*3), circle_x, color('purple')));
  for (var i=1; i<=17; i++) {
  circles.push(new Circle(circle_y+(15*3), circle_x + (20*i), color('purple')));
  }
  //prints['1514'] = 	19;
  circles.push(new Circle(circle_y+(15*4), circle_x, color('purple')));
  for (var i=1; i<=18; i++) {
  circles.push(new Circle(circle_y+(15*4), circle_x + (20*i), color('purple')));
  }
  //prints['1515'] = 	15;
  circles.push(new Circle(circle_y+(15*5), circle_x, color('purple')));
  for (var i=1; i<=14; i++) {
  circles.push(new Circle(circle_y+(15*5), circle_x + (20*i), color('purple')));
  }
  //prints['1516'] = 	11;
  for (var i=1; i<=11; i++) { //1 under it
  circles.push(new Circle(circle_y+(15*6), circle_x + (20*i), color('purple')));
  }
  //prints['1517'] = 	1;
  circles.push(new Circle(circle_y+(15*7), circle_x, color('purple')));
  //prints['1518'] = 	9;
  circles.push(new Circle(circle_y+(15*8), circle_x, color('purple')));
  for (var i=1; i<=8; i++) {
  circles.push(new Circle(circle_y+(15*8), circle_x + (20*i), color('purple')));
  }
  //prints['1519'] = 	9;
  for (var i=1; i<=19; i++) { //1 under it
  circles.push(new Circle(circle_y+(15*9), circle_x + (20*i), color('purple')));
  }
 //prints['1520'] = 	6;
  circles.push(new Circle(circle_y+(15*10), circle_x, color('purple')));
  for (var i=1; i<=5; i++) {
   circles.push(new Circle(circle_y+(15*10), circle_x + (20*i), color('purple')));
  }
  //prints['1521'] = 	7;
  circles.push(new Circle(circle_y+(15*11), circle_x, color('purple')));
  for (var i=1; i<=6; i++) {
  circles.push(new Circle(circle_y+(15*11), circle_x + (20*i), color('purple')));
  }
  //prints['1522'] = 	1;
  circles.push(new Circle(circle_y+(15*12), circle_x + (20*1), color('purple'))); //drawing (red) under it
  //prints['1523'] = 	10;
  circles.push(new Circle(circle_y+(15*13), circle_x, color('purple')));
  for (var i=1; i<=9; i++) {
  circles.push(new Circle(circle_y+(15*13), circle_x + (20*i), color('purple')));
  }
//prints['1524'] = 	1;
  circles.push(new Circle(circle_y+(15*14), circle_x, color('purple')));
//prints['1526'] = 	2;
  circles.push(new Circle(circle_y+(15*16), circle_x, color('purple')));
  for (var i=1; i<=1; i++) {
  circles.push(new Circle(circle_y+(15*16), circle_x + (20*1), color('purple')));
 }

  var life = 48;
  var year = xcount - 1;
  //year 1511
  console.log("b height/2" + height/2);
  var painting = ["1510","1516","1519"];
  circles.push(new Circle(circle_y, circle_x, color('rgb(0,0,255)')));//painting 510  blue
  circles.push(new Circle(755, circle_x, color('rgb(0,0,255)')));//painting 516
  circles.push(new Circle(800, circle_x, color('rgb(0,0,255)')));//painting 519
  var block = ["1503","1503"];
  circles.push(new Circle(circle_y-(15*7), circle_x, color('#0f0'))); //green
  circles.push(new Circle(circle_y-(15*7), circle_x + (20*1), color('#0f0'))); 
  var roundel = ["1505"];
  circles.push(new Circle(circle_y-(15*5), circle_x, color('rgb(0,247,255)'))); //light blue 
  var book = ["1511"];
  //circles.push(new Circle(circle_y+(15*1), circle_x, color('rgb(0,247,255)'))); 
  circles.push(new Circle(circle_y+(15*1), circle_x, color('rgb(255, 204, 0)'))); //yellow
  var drawing = ["1485","1490","1493","1498","1501","1512","1521","1522"];
  circles.push(new Circle(circle_y-(15*25), circle_x, color('red'))); 
  circles.push(new Circle(circle_y-(15*20), circle_x, color('red'))); 
  circles.push(new Circle(circle_y-(15*17), circle_x, color('red'))); 
  circles.push(new Circle(circle_y-(15*12), circle_x, color('red'))); 
  circles.push(new Circle(circle_y-(15*9), circle_x, color('red'))); 
  circles.push(new Circle(circle_y+(15*2), circle_x, color('red'))); 
  circles.push(new Circle(circle_y+(15*11), circle_x, color('red'))); 
  circles.push(new Circle(circle_y+(15*12), circle_x, color('red'))); 


  for (var a = 200; a < width & life > 0; a += 15) {
    acount++;
    life--;
    for (var b = 100; b < height/2; b += 30) {
      //add the circles to the array at x = a and y = b
      if(acount > 1){
         ccount++;
         

   
  //if(  year == 1511 ){
    //     console.log("year 1511");
    //}
  //else{
         //circles.push(new Circle(a, b, 0)); 
  //}
  //var block = ["1503","1503"];
  //var roundel = ["1505"];
  //var painting = ["1510","1516","1519"];

      }
      bcount++;
    year++;
    }
  }
  console.log(circles.length);
  console.log("a count " + acount + " b count " + bcount + " circle count " + ccount);
  console.log("width " + width + " height " + height);
  textSize(10);
  //var text = createDiv("1494 Married Agnes Frey <a href='http://i.imgur.com/WXaUlrK.gif'>read</a>");
  var text = createDiv("1494 <a href='http://www.durerart.com/Marriage.html'>Married Agnes Frey</a>");
  //text.position(circle_x, 450);
  //text.position(circle_x, lifeevent);
  text.position(400, lifeevent);
  //text.style("font-family", "monospace");
  //text.style("background-color", "#FF0000");
  text.style("color", "#000000");
  text.style("font-size", "8pt");
  //text.style("padding", "10px");
  var metstart = createDiv("1480 Met <a href='https://www.metmuseum.org/toah/hd/durr/hd_durr.htm'>Dürer Collection</a> Start (Age 9)");
  metstart.position(155, metevent);
  metstart.style("color", "#18542E");
  metstart.style("font-size", "8pt");

  var birth = createDiv("1471 <a href='https://www.google.com/maps/place/Nuremberg,+Germany/@49.436009,10.9929532,11z/data=!3m1!4b1!4m5!3m4!1s0x479f57aeb5b61cd3:0xdd5daf85a98c21b7!8m2!3d49.4521018!4d11.076circle_y4'>Birth</a>");
  birth.position(75, lifeevent);
  birth.style("color", "#000000");
  birth.style("font-size", "8pt");

var max = createDiv("1512 <a href='https://en.wikipedia.org/wiki/Maximilian_I,_Holy_Roman_Emperor'>Maximilian I</a> Patron");
  max.position(640, lifeevent);
  max.style("color", "#000000");
  max.style("font-size", "8pt");

  var metend = createDiv("1526 Met <a href='https://www.metmuseum.org/join-and-give/donate'> Dürer Collection </a> Stop (Age 55)");
  metend.position(850, metevent);
  metend.style("color", "#18542E");
  metend.style("font-size", "8pt");

}

function draw() {
  background(255);
  //text.position(445, 460);
  for (var b = 0; b < circles.length; b++) {
    circles[b].show();
    //console.log("shown");
  }
 var margin = 90;
 textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  var c = color('brown');
  fill(c);
  text("Albrecht Dürer @ the Met", margin,margin-30);
  fill(0);
 
   //line(x,y-12,x, y-80);
  //KEY
  //painting
  var key = xaxis + 30;
  textSize(15);
  circles.push(new Circle(50, key + 5, color('rgb(0,0,255)')));//painting 519
  fill(0);
  text(" Painting", 60, key + 10);// 155);
  //stroke(0);
  //book
  textSize(15);
  fill(0);
  circles.push(new Circle(50, key + 25, color('rgb(255, 204, 0)'))); //yellow
  text(" Book", 60, key + 30);
  //roundel
  textSize(15);
  circles.push(new Circle(50, key + 45, color('rgb(0,247,255)'))); //light blue
  text(" Roundel", 60, key + 50);
  //block
  textSize(15);
  circles.push(new Circle(50, key + 65, color('#0f0'))); //green
  text(" Block", 60, key + 70);
  //drawing
  textSize(15);
  circles.push(new Circle(50, key + 85, color('red')));
  text(" Drawing", 60, key + 90);
  //print
  textSize(15);
  circles.push(new Circle(50, key + 105, color('purple')));
  text(" Print", 60, key + 110);

  // Draw y axis label
   //HERE IS Y Label 
  textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
  textSize(9);
  var c = color('black');
  fill(c);
  text("y-axis:", 110, key + 220);
  text("Item Count", 87, key + 230);

  text("y-axis:", 110, key + 1220);
  text("Item Count", 87, key + 1230);

  text("y-axis:", 110, key + 2220);
  text("Item Count", 87, key + 2230);

  text("y-axis:", 110, key + 3220);
  text("Item Count", 87, key + 3230);

  stroke(0);
  var bottom = 500-margin;
  // just the line
  //line(margin + 110,bottom-30,width - 80,bottom-30);
  noStroke();
  textAlign(CENTER);

  // Draw the y axis
  //HERE X TICS
  stroke(0);
  var bottom = 500-margin;
  //line(margin + 110, bottom -30 , margin + 110, 75);
  noStroke();
  textAlign(CENTER);
  textSize(10);
  var life = 48;
  var year = xcount - 1;
  var y = xevent+10;
  for(var x=200; x<width && life > 0 ; x+=15){
    life--;
    noStroke();
    fill(0);
    if( ( year%5 == 0 || year%10 == 0 ) && year < 1527){
       text(year.toString(), x, xevent);
    }
    stroke(0);
    if(x > 201){
    line(x,y,x, y-10);
    }
    year++;
  }

 // y-axis
  //circles.push(new Circle(circle_y+(15*1), circle_x, color('purple')));
  //circles.push(new Circle(circle_y+(15*1), circle_x + (20*1), color('purple')));
  var bottom = 500-90;
  var count = 1;
  // HERE Y Labels
  for(var y=0; y < (172*20) ; y+=20){ //backwards
     stroke(0);
     fill(0);
     if(count < 172){
       line(margin + 110,  circle_x + y , margin +102, circle_x + y); // HERE Y TICS
       textSize(9);
       text(count.toString(), margin + 95, circle_x + 3 + y);
     }
     count++;

    }
  line(margin + 110, circle_x , margin + 110, (circle_x + (170*20)));

 // Draw life
  life = 58;
  var bottom = 550-margin;
  var end = 0;
  textSize(10);
  var year = 1471;
  for(var x=100; x<width && life > 0 ; x+=15){
    //var y = bottom;
    var y = xaxis;
    life--;
    noStroke();
    fill(0);
    
if(  year == 1471  ){
       //text(year.toString() + " Birth", x, y);
       //console.log("Birth x " + x + " y " + y); 
       stroke(0);
       line(x,y,x, lifeevent + 12);
       //console.log("Birth x " + x + " y " + y);
    }
    if(  year == 1528  ){
       text(year.toString() + " End", x, lifeevent + 10);
       stroke(0);
       line( x,y, x, lifeevent + 12);
    }
    fill(0);

if(  year == 1480  ){
       fill('hsb(142, 84%, 65%)');
       //text(year.toString() + " Met Dürer Collection Start (Dürer was age 9.)", x, y+20);
       stroke(0);
       line(x-20,y,x-20, metevent + 12);
    }
    fill(0);

if(  year == 1526  ){
       //fill('hsb(160, 100%, 50%)');
       //text(year.toString() + " Met Collection Stop", x, y+20);
       //console.log("Met c stop x " + x + " y " + y); 
       stroke(0);
       line(x-20,y,x-20, metevent + 12);
    }
    fill(0);
    if(  year == 1494  ){
       //createA('http://p5js.org/', 'this is a link');
       //text.position(190, 50);
       //text(year.toString() + " Married Agnes Freyi", x, y);
       stroke(0);
       line(x-20,y,x-20, lifeevent + 12);
       //console.log(" agnes freyi x " + x + " y " + y);
    }

    fill(0);
   if(  year == 1512  ){
       //text(year.toString() + " Maximilian I is Patron", x,y);
       //console.log("Max x " + x + " y " + y);
       stroke(0);
       line(x-20,y,x-20, lifeevent + 12);
    }
    year++;
    end = x;
    fill(0);
  }

  stroke(0);
  //x-axis line
  line(100,xaxis,end,xaxis); //HERE IS X line
  //HERE IS X Label 
  textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
  textSize(9);
  var c = color('black');
  fill(c);
  text("x-axis: Year", end -10, xaxis + 15);
  //bottom = 500 - 90;
  //line(100,bottom-30,end,bottom-30); //HERE IS X line
  noStroke();
  textAlign(CENTER);

}

function Circle(x, y, c) {
  this.x = x;
  this.y = y;
  this.c = c;

  this.show = function() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, 10, 10);
  }
}
