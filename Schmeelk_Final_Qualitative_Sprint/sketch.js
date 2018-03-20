var durImg;  // Declare variable 'img'.
var table;
var tableDurer;
var currentYear;
var durerRows;
var itemRows;
var fr = 10;
var drawTrueMax = 1;
var drawTrue = 0;
var margin = 150;
var file;
var width = 250;
var height = 250;
var yearText;
var buttonLeft;
var buttonRight;
var allText = [];
var start = 1480;
var allDurImages ={};
var allMetImages ={};
var durStart = 1480;
var durEnd = 1526;
var durAge = 9;
//var div = createDiv('').size(400, 50 );
var div;

function preload() {
  currentYear = int(1480);
  tableAll = loadTable('MetObjects_All_Final.csv', 'csv', 'header');
  tableDurer = loadTable('MetObjects_Durer_Final.csv', 'csv', 'header');
  for(var i = durStart; i < durEnd; i++){
     yearText = loadStrings('history/'+String(i)+'.txt');
     append(allText, yearText); 
  }
  yearText = loadStrings('history/'+String(1480)+'.txt');
  prepareDurImages();
  prepareAllImages();
}

function setup() {
  //createCanvas(720, 400);
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  console.log("Here we are.");
  prepareDurImages();
  prepareAllImages();
  buttonLeft = createButton('Dürer Earler Years');
  buttonLeft.position(0, windowHeight/2);
  buttonLeft.mousePressed(changeEarlier);
  buttonRight = createButton('Dürer Later Years');
  buttonRight.position(windowWidth - 150, windowHeight/2);
  buttonRight.mousePressed(changeLater);
}

function changeEarlier() {
  if(currentYear <= durStart)
     return;
  currentYear = currentYear - 1;
  var y = currentYear - durStart;
  //durImg = loadImage("default.jpg");  // Load the imagea
  yearText = allText[y];
  console.log("Changing year to: " + currentYear);
  console.log(yearText); 
  drawTrue = 0;
  durAge = durAge - 1;
  background('white');
  div.remove();
  draw();
}

function changeLater() {
  if(currentYear >= 1525)
     return;
  currentYear = currentYear + 1
  var y = currentYear - durStart;
  //durImg = loadImage("default.jpg");  // Load the imagea
  yearText = allText[y];
  console.log("Changing year to: " + currentYear);
  console.log(yearText);
  drawTrue = 0;
  durAge = durAge + 1;
  background('white');
  div.remove();
  draw();
}

function prepareDurImages(){
   console.log("Loading Dur Images");
   for (var year = durStart; year < durEnd; year++) {
    durerRows = [];
    console.log("Year is: " + year);
    durerRows = tableDurer.findRows(String(year),'Object Begin Date');
  var durerCount = tableDurer.getRowCount();
    console.log("Durer all row count: " + durerCount);
    var ranDur = int(random(0,durerRows.length));
   var rlen = durerRows.length;
   //console.log("Load Images RanDur length: " + durerRows.length);
   //console.log("Load Images RanDur length: " + rlen);
   if( int(rlen) < 1 ){
     //console.log("Loading default image");
     durImg = -1;  // Load the imagea
   }
   else{
     //console.log("Loading random durer image for year");
     //durImg = loadImage("/var/www/html/Class03132018/images/"+tableDurer.getString(String(ranDur), 'Image File Name'));  // Load the imagea
     console.log(durerRows[ranDur]);
     console.log("End durer rows");
     var toget = durerRows[ranDur];
     console.log(toget);
     console.log("End toget");
     durImg = loadImage("images/"+ toget.get(1));  // Load the imagea
     //console.log("Loading Durer image: " + tableDurer.getString(String(ranDur), 'Image File Name'));
     //console.log("Loading Durer image: " + toget[1]);
   }
   allDurImages[year] = durImg;
   console.log("Loaded dur images: " + allDurImages);
 }
}

function prepareAllImages(){
   console.log("Loading All Images");
    var itemCount = tableAll.getRowCount();
    console.log("Item all row count: " + itemCount);
  for (var year = durStart; year < durEnd; year++) {
    var itemRows = [];
    console.log("Year is: " + year);
    itemRows = tableAll.findRows(String(year),'Object Begin Date');
    console.log("Item year row count: " + itemRows.length);
    var allYearImages = [];
   for(k=0; k < itemRows.length; k++){
     //console.log(itemRows[k]);
     var toget = itemRows[k];
     var eImg = loadImage("images/"+ toget.get(1));  // Load the image
     //console.log("Loading image: " + tableAll.getString(String(k), 'Image File Name'));
     //console.log("Loading all item image: " + toget.get(1));
     append(allYearImages, eImg); 
   }
   console.log("Found year ["+ year + "] allYearImages.length: " + allYearImages.length);
   allMetImages[year] = allYearImages;
  }

}

function draw() {
  if(drawTrue >= drawTrueMax){
     return;
  }
  console.log("DrawTrue count: " + String(drawTrue));
  var durImageWidth = 10; 
  var placeDiv = 30;
  var haveDur = allDurImages[currentYear];
  if(haveDur == -1){
     console.log("No Dur image this year");
  }else{ 
     durImg = allDurImages[currentYear];
     console.log("Drawing durer year image");
     image(durImg, 50, 125);
     console.log(durImg);
     durImageWidth = durImg.width;
     placeDiv = durImageWidth + 100;
     console.log("Drawing durer year image");
  }
  var allYearImages = allMetImages[currentYear];

  console.log("Drawing all year images: " + allYearImages.length);
  for(var k=0; k < allYearImages.length; k++){
     var img = allYearImages[k];
     //var ranW = int(random(30,windowWidth - 100));
     var ranW = int(random(durImageWidth + 100,windowWidth - 100));
     //var ranH = int(random( 30,windowHeight - 50 - img.height/5));
     var ranH = int(random( 30,windowHeight - 50 - img.height/5));
     console.log("Drawing an all year image: ranW["+ranW+"] ranH["+ranH+"]");
     image(img, ranW, ranH, img.width/5, img.height/5);
  }

  //inserting text
  textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  fill('white');
  rect(10, 5, 240, 25);
  fill('black');
  text(String(currentYear), 25, 25);
  fill('black');
  text("Dürer is " + durAge + " years old.", 95, 25);
  text("Düring German Renaissance @ the Met", 650, 25);
  textSize(10);
  var ranText = int(random(0,yearText.length));
  if(drawTrue == drawTrueMax - 1 ){
  div = createDiv('');
  div.html( 'Wikipedia Data: \n' + String(yearText[ranText]), false );
  div.style('z-index', '5000');
  div.position(placeDiv, windowHeight - 40);
  console.log(yearText);
  console.log("Random Text: ");
  console.log(yearText[ranText]);
  }
  //text("Battle of Bosworth Field - Henry Tudor's forces defeat English ", 380, 210);
  //text("King Richard III during last battle in the Wars of the Roses", 380, 240);
  drawTrue = drawTrue + 1;
}

