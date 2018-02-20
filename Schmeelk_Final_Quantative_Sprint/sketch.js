var circles = [];
var xcount = 1480;

function setup() {
  createCanvas(1000, 800);
  //there's a "b" for every "a"
  //line(x,y-12,x, y-80);
  //key
  //painting
/*
  circles.push(new Circle(50, 150, color('rgb(0,0,255)')));//painting 519
  // fill('hsb(160, 100%, 50%)');
  //     text(" Met Collection Start", 60, 150);
  //     stroke(0);
 //text("Painting", 60, 150);
  //book
  circles.push(new Circle(665+(15*1), 370, color('rgb(0,247,255)')));
  //roundel
  circles.push(new Circle(665-(15*5), 370, color('black')));
  //block
  circles.push(new Circle(665-(15*7), 370, color('#0f0'))); //green
  //drawing
  circles.push(new Circle(665-(15*25), 370, color('red'))); 
  //print
  circles.push(new Circle(665-(15*30), 370, color('purple'))); //green
  */

  var acount = 0;
  var bcount = 0;
  var ccount = 0;
  var ycount = 0;
  var prints = new Object(); // or just {}
prints['1480'] = 	1;
  circles.push(new Circle(665-(15*30), 370, color('purple'))); //green
  //circles.push(new Circle(665, 370, color('rgb(0,0,255)')));//painting 510  blue
prints['1485'] = 	170;
  circles.push(new Circle(665-(15*25), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*9), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*10), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*11), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*12), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*13), color('purple'))); //green
  circles.push(new Circle(665-(15*25), 370 - (20*14), color('purple'))); //green
prints['1490'] = 	1;
  circles.push(new Circle(665-(15*20), 370, color('purple'))); //green
prints['1491'] = 	2;
  circles.push(new Circle(665-(15*19), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*19), 370 - (20*1), color('purple'))); //green
prints['1492'] = 	6;
  circles.push(new Circle(665-(15*18), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*18), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*18), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*18), 370 - (20*3), color('purple'))); //green
prints['1493'] = 	7;
  circles.push(new Circle(665-(15*17), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*17), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*17), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*17), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*17), 370 - (20*4), color('purple'))); //green
prints['1495'] = 	7;
  circles.push(new Circle(665-(15*15), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*15), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*15), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*15), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*15), 370 - (20*4), color('purple'))); //green
prints['1496'] = 	17;
  circles.push(new Circle(665-(15*14), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*14), 370 - (20*8), color('purple'))); //green
prints['1497'] = 	13;
  circles.push(new Circle(665-(15*13), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*13), 370 - (20*8), color('purple'))); //green
prints['1498'] = 	17;
  circles.push(new Circle(665-(15*12), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*12), 370 - (20*8), color('purple'))); //green
prints['1499'] = 	8;
  circles.push(new Circle(665-(15*11), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*11), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*11), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*11), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*11), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*11), 370 - (20*5), color('purple'))); //green
prints['1500'] = 	11;
  circles.push(new Circle(665-(15*10), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*10), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*10), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*10), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*10), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*10), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*10), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*10), 370 - (20*7), color('purple'))); //green
prints['1501'] = 	17;
  circles.push(new Circle(665-(15*9), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*9), 370 - (20*8), color('purple'))); //green
prints['1502'] = 	10;
  circles.push(new Circle(665-(15*8), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*8), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*8), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*8), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*8), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*8), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*8), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*8), 370 - (20*7), color('purple'))); //green
prints['1503'] = 	34;
  circles.push(new Circle(665-(15*7), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*9), color('purple'))); //green
  circles.push(new Circle(665-(15*7), 370 - (20*10), color('purple'))); //green
prints['1504'] = 	21;
  circles.push(new Circle(665-(15*6), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665-(15*6), 370 - (20*9), color('purple'))); //green
prints['1505'] = 	9;
  circles.push(new Circle(665-(15*5), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*5), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*5), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*5), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*5), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*5), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*5), 370 - (20*6), color('purple'))); //green
prints['1507'] = 	4;
  circles.push(new Circle(665-(15*3), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*3), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*3), 370 - (20*2), color('purple'))); //green
prints['1508'] = 	28;
  circles.push(new Circle(665-(15*2), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*9), color('purple'))); //green
  circles.push(new Circle(665-(15*2), 370 - (20*10), color('purple'))); //green
prints['1509'] = 	31;
  circles.push(new Circle(665-(15*1), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*9), color('purple'))); //green
  circles.push(new Circle(665-(15*1), 370 - (20*10), color('purple'))); //green
prints['1510'] = 	41;
  circles.push(new Circle(665-(15*0), 370, color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*9), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*10), color('purple'))); //green
  circles.push(new Circle(665-(15*0), 370 - (20*11), color('purple'))); //green
prints['1511'] = 	56;
  circles.push(new Circle(665+(15*1), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*9), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*10), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*11), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*12), color('purple'))); //green
  circles.push(new Circle(665+(15*1), 370 - (20*13), color('purple'))); //green
prints['1512'] = 	41;
  circles.push(new Circle(665+(15*2), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*9), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*10), color('purple'))); //green
  circles.push(new Circle(665+(15*2), 370 - (20*11), color('purple'))); //green
prints['1513'] = 	18;
  circles.push(new Circle(665+(15*3), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665+(15*3), 370 - (20*9), color('purple'))); //green
prints['1514'] = 	19;
  circles.push(new Circle(665+(15*4), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*7), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*8), color('purple'))); //green
  circles.push(new Circle(665+(15*4), 370 - (20*9), color('purple'))); //green
prints['1515'] = 	15;
  circles.push(new Circle(665+(15*5), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*5), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*5), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*5), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*5), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*5), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*5), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665+(15*5), 370 - (20*7), color('purple'))); //green
prints['1516'] = 	11;
  circles.push(new Circle(665+(15*6), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*6), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*6), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*6), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*6), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*6), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*6), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665+(15*6), 370 - (20*7), color('purple'))); //green
prints['1517'] = 	1;
  circles.push(new Circle(665+(15*7), 370, color('purple'))); //green
prints['1518'] = 	9;
  circles.push(new Circle(665+(15*8), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*8), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*8), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*8), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*8), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*8), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*8), 370 - (20*6), color('purple'))); //green
prints['1519'] = 	9;
  circles.push(new Circle(665+(15*9), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*9), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*9), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*9), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*9), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*9), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*9), 370 - (20*6), color('purple'))); //green
prints['1520'] = 	6;
  circles.push(new Circle(665+(15*10), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*10), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*10), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*10), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*10), 370 - (20*4), color('purple'))); //green
prints['1521'] = 	7;
  circles.push(new Circle(665+(15*11), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*11), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*11), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*11), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*11), 370 - (20*4), color('purple'))); //green
prints['1522'] = 	1;
  circles.push(new Circle(665+(15*12), 370, color('purple'))); //green
prints['1523'] = 	10;
  circles.push(new Circle(665+(15*13), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*13), 370 - (20*1), color('purple'))); //green
  circles.push(new Circle(665+(15*13), 370 - (20*2), color('purple'))); //green
  circles.push(new Circle(665+(15*13), 370 - (20*3), color('purple'))); //green
  circles.push(new Circle(665+(15*13), 370 - (20*4), color('purple'))); //green
  circles.push(new Circle(665+(15*13), 370 - (20*5), color('purple'))); //green
  circles.push(new Circle(665+(15*13), 370 - (20*6), color('purple'))); //green
  circles.push(new Circle(665+(15*13), 370 - (20*7), color('purple'))); //green
prints['1524'] = 	1;
  circles.push(new Circle(665+(15*14), 370, color('purple'))); //green
prints['1526'] = 	2;
  circles.push(new Circle(665+(15*16), 370, color('purple'))); //green
  circles.push(new Circle(665+(15*16), 370 - (20*1), color('purple'))); //green
 
  var life = 48;
  var year = xcount - 1;
  //year 1511
  console.log("b height/2" + height/2);
  var painting = ["1510","1516","1519"];
  circles.push(new Circle(665, 370, color('rgb(0,0,255)')));//painting 510  blue
  circles.push(new Circle(755, 370, color('rgb(0,0,255)')));//painting 516
  circles.push(new Circle(800, 370, color('rgb(0,0,255)')));//painting 519
  var block = ["1503","1503"];
  circles.push(new Circle(665-(15*7), 370, color('#0f0'))); //green
  circles.push(new Circle(665-(15*7), 350, color('#0f0'))); 
  var roundel = ["1505"];
  circles.push(new Circle(665-(15*5), 370, color('black'))); 
  var book = ["1511"];
  //circles.push(new Circle(665+(15*1), 370, color('red'))); 
  circles.push(new Circle(665+(15*1), 370, color('rgb(0,247,255)'))); 
  var drawing = ["1485","1490","1493","1498","1501","1512","1521","1522"];
  circles.push(new Circle(665-(15*25), 370, color('red'))); 
  circles.push(new Circle(665-(15*20), 370, color('red'))); 
  circles.push(new Circle(665-(15*17), 370, color('red'))); 
  circles.push(new Circle(665-(15*12), 370, color('red'))); 
  circles.push(new Circle(665-(15*9), 370, color('red'))); 
  circles.push(new Circle(665+(15*2), 370, color('red'))); 
  circles.push(new Circle(665+(15*11), 370, color('red'))); 
  circles.push(new Circle(665+(15*12), 370, color('red'))); 


  for (var a = 200; a < width & life > 0; a += 15) {
    acount++;
    life--;
    for (var b = 100; b < height/2; b += 30) {
      //add the circles to the array at x = a and y = b
      if(acount > 1){
         ccount++;
         

   
  if(  year == 1511 ){
         console.log("year 1511");
    }
  else{
         //circles.push(new Circle(a, b, 0)); 
  }
  var block = ["1503","1503"];
  var roundel = ["1505"];
  var painting = ["1510","1516","1519"];

      }
      bcount++;
    year++;
    }
  }
  console.log(circles.length);
  console.log("a count " + acount + " b count " + bcount + " circle count " + ccount);
  console.log("width " + width + " height " + height);
       //text(year.toString() + " Married Agnes Frey", x, y);
  textSize(10);
  //var text = createDiv("1494 Married Agnes Frey <a href='http://i.imgur.com/WXaUlrK.gif'>read</a>");
  var text = createDiv("1494 <a href='http://www.durerart.com/Marriage.html'>Married Agnes Frey</a>");
  text.position(370, 450);
  //text.style("font-family", "monospace");
  //text.style("background-color", "#FF0000");
  text.style("color", "#000000");
  text.style("font-size", "8pt");
  //text.style("padding", "10px");
  var metstart = createDiv("1480 Met <a href='https://www.metmuseum.org/toah/hd/durr/hd_durr.htm'>Collection</a> Start");
  metstart.position(155, 470);
  metstart.style("color", "#18542E");
  metstart.style("font-size", "8pt");

  var birth = createDiv("1471 <a href='https://www.google.com/maps/place/Nuremberg,+Germany/@49.436009,10.9929532,11z/data=!3m1!4b1!4m5!3m4!1s0x479f57aeb5b61cd3:0xdd5daf85a98c21b7!8m2!3d49.4521018!4d11.0766654'>Birth</a>");
  birth.position(75, 450);
  birth.style("color", "#000000");
  birth.style("font-size", "8pt");

var max = createDiv("1471 <a href='https://en.wikipedia.org/wiki/Maximilian_I,_Holy_Roman_Emperor'>Maximilian I</a> Patron");
  max.position(640, 450);
  max.style("color", "#000000");
  max.style("font-size", "8pt");

  var metend = createDiv("1526 Met <a href='https://www.metmuseum.org/join-and-give/donate'> Collection </a> Stop");
  metend.position(850, 470);
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
  //key
  //painting
  textSize(15);
  circles.push(new Circle(50, 150, color('rgb(0,0,255)')));//painting 519
  fill(0);
  text(" Painting", 60, 155);
  //stroke(0);
  //book
  textSize(15);
  fill(0);
  circles.push(new Circle(50, 170, color('rgb(0,247,255)')));
  text(" Book", 60, 175);
  //roundel
  textSize(15);
  circles.push(new Circle(50, 190, color('black')));
  text(" Roundel", 60, 195);
  //block
  textSize(15);
  circles.push(new Circle(50, 210, color('#0f0'))); //green
  text(" Block", 60, 215);
  //drawing
  textSize(15);
  circles.push(new Circle(50, 230, color('red')));
  text(" Drawing", 60, 235);
  //print
  textSize(15);
  circles.push(new Circle(50, 250, color('purple'))); //green
  text(" Print", 60, 255);
 
  // Draw the x axis
  stroke(0);
  var bottom = 500-margin;
  // just the line
  //line(margin + 110,bottom-30,width - 80,bottom-30);
  noStroke();
  textAlign(CENTER);

  // Draw the y axis
  stroke(0);
  var bottom = 500-margin;
  line(margin + 110, bottom -30 , margin + 110, 75);
  noStroke();
  textAlign(CENTER);

  textSize(10);
  var life = 48;
  var year = xcount - 1;
  for(var x=200; x<width && life > 0 ; x+=15){
    var y = bottom;
    life--;
    noStroke();
    fill(0);
    if( ( year%5 == 0 || year%10 == 0 ) && year < 1527){
       text(year.toString(), x, y);
    }
    stroke(0);
    if(x > 201){
    line(x,y-12,x, y-30);
    }
    year++;
  }

 // y-axis
  //circles.push(new Circle(665+(15*1), 370, color('purple'))); //green
  //circles.push(new Circle(665+(15*1), 370 - (20*1), color('purple'))); //green
  var bottom = 500-90;
  line(margin + 110, bottom -30 , margin + 110, 75);
 
  for(var y=0; y < (15*20) ; y+=20){
     stroke(0);
     fill(0);
     line(margin + 110,  370 - y , margin +102, 370 - y);
      textSize(9);
     if( y == 0 ){
       fill(0);
       text("1", margin + 95, 372-y);
     stroke(0);
     }
     if( y == 20 ){
       fill(0); 
       text("2", margin + 95, 372-y);
     }
      if( y == 40 ){
       fill(0); 
       text("4", margin + 95, 372-y);
     }
      if( y == 60 ){
       fill(0); 
       text("6", margin + 95, 372-y);
     }

      if( y == 80 ){
       fill(0); 
       text("7", margin + 95, 372-y);
     }
      if( y == 100 ){
       fill(0); 
       text("8", margin + 95, 372-y);
     }

       if( y == 120 ){
       fill(0); 
       text("9", margin + 95, 372-y);
     }
      if( y == 140 ){
       fill(0); 
       text("10 - 11", margin + 85, 372-y);
     }

      if( y == 160 ){
       fill(0); 
       text("13 - 17", margin + 85, 372-y);
     }

      if( y == 180 ){
       fill(0); 
       text("18 - 21", margin + 85, 372-y);
     }

      if( y == 200 ){
       fill(0); 
       text("28 - 34", margin + 84, 372-y);
     }

      if( y == 220 ){
       fill(0); 
       text("41", margin + 95, 372-y);
     }

      if( y == 240 ){
       fill(0); 
       text("44", margin + 95, 372-y);
     }
   
      if( y == 260 ){
       fill(0); 
       text("56", margin + 95, 372-y);
     }
   
      if( y == 280 ){
       fill(0); 
       text("170", margin + 95, 372-y);
     }

    }

 // Draw life
  life = 58;
  var bottom = 550-margin;
  var end = 0;
  textSize(10);
  var year = 1471;
  for(var x=100; x<width && life > 0 ; x+=15){
    var y = bottom;
    life--;
    noStroke();
    fill(0);
    
if(  year == 1471  ){
       //text(year.toString() + " Birth", x, y);
       //console.log("Birth x " + x + " y " + y); 
       stroke(0);
       line(x,y-12,x, y-80);
       //console.log("Birth x " + x + " y " + y);
    }
    if(  year == 1528  ){
       text(year.toString() + " End", x, y);
       stroke(0);
       line(x,y-12,x, y-80);
    }
    fill(0);

if(  year == 1480  ){
       fill('hsb(142, 84%, 65%)');
       //text(year.toString() + " Met Collection Start", x, y+20);
       stroke(0);
       line(x-20,y+10,x-20, y-80);
    }
    fill(0);

if(  year == 1526  ){
       //fill('hsb(160, 100%, 50%)');
       //text(year.toString() + " Met Collection Stop", x, y+20);
       //console.log("Met c stop x " + x + " y " + y); 
       stroke(0);
       line(x-20,y+10,x-20, y-80);
    }
    fill(0);
    if(  year == 1494  ){
       //createA('http://p5js.org/', 'this is a link');
       //text.position(190, 50);
       //text(year.toString() + " Married Agnes Freyi", x, y);
       stroke(0);
       line(x-20,y-12,x-20, y-80);
       //console.log(" agnes freyi x " + x + " y " + y);
    }

    fill(0);
   if(  year == 1512  ){
       //text(year.toString() + " Maximilian I is Patron", x,y);
       //console.log("Max x " + x + " y " + y);
       stroke(0);
       line(x-20,y-12,x-20, y-80);
    }
    year++;
    end = x;
    fill(0);
  }
  stroke(0);
  // just the line
  //line(margin + 110,bottom-30,width - 80,bottom-30);
  bottom = 500 - 90;
  //x-axis line
  line(100,bottom-30,end,bottom-30);
  noStroke();
  textAlign(CENTER);

  /*  var y = height-margin+30;
    x = map(i,0, allYears.length,margin, width-margin);
    noStroke();
    fill(0);
    text(allYears[i].year, x, y);
    stroke(0);
    line(x,y-12,x, y-30);
*/

}

function Circle(x, y, c) {
  this.x = x;
  this.y = y;
  this.c = c;

  this.show = function() {
    fill(this.c);
    noStroke();
      //1490
   if (this.x == 665-(15*20) && this.y==370 && this.c == color('red')){
    arc(10, 10, this.x, this.y,  0, PI + HALF_PI, OPEN);
    //ellipse(this.x, this.y, 7, 7);

   }
   else if (this.x == 665+(15*12) && this.y == 370 && this.c == color('red') ){
    //1522
    ellipse(this.x, this.y, 7, 7);

   }
   else{
    ellipse(this.x, this.y, 10, 10);
   }
    //console.log("showing");
  }
}
