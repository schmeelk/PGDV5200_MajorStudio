var durImg;  // Declare variable 'img'.
var table;
var tableDurer;
var currentYear;
var durerRows;
var itemRows;
var fr = 10;
var drawTrueMax = 2;
var drawTrue = 0;
var margin = 150;
var file;
var width = 250;
var height = 250;
var yearText;
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
  tableDurer = loadTable('MetObjects_Durer_Final.csv', 'csv', 'header');
  prepareDurImages();
}

function setup() {
  //createCanvas(720, 400);
  var height = 2000;
  createCanvas(windowWidth, height);
  frameRate(fr);
  console.log("Here we are.");
  prepareDurImages();
  draw();
}


function prepareDurImages(){
   console.log("Loading Dur Images colums[" + tableDurer.getColumnCount() + "] rows [" + tableDurer.getRowCount() + "]");
   for (var year = durStart; year < durEnd; year++) {
     var durerRows = [];
     console.log("Year is: " + year);
     durerRows = tableDurer.findRows(String(year),'Object Begin Date');
     console.log("Durer image year row count: " + durerRows.length);
     var durerAllYearImages = [];
     for(k=0; k < durerRows.length; k++){
       var toget = durerRows[k];
       var eImg = loadImage("images/"+ toget.get(1));  // Load the image
       append(durerAllYearImages, eImg);
     }
     console.log("Found year ["+ year + "] durerAllYearImages.length: " + durerAllYearImages.length);
     allDurImages[year] = durerAllYearImages;
    }

  draw();
}



function draw() {
  if(drawTrue >= drawTrueMax){
     return;
  }
  console.log("DrawTrue count: " + String(drawTrue));
  drawTrue = drawTrue + 1;

  var durImageY = 225;
  var durImageWidth = 10;
  for (var year = durStart; year < durEnd; year++) {
  var haveDur = allDurImages[year];
    if(haveDur.length == 0){
       console.log("No Dur image this year");
    }else{
     durImg = allDurImages[year];
     for(var i = 0; i < durImg.length; i++){
       image(durImg[i], 200, durImageY, durImg[i].width/2, durImg[i].height/2);
       console.log(durImg[i]);
       durImageY = durImageY + durImg[i].height/2 + 10;
      }
    }
  }
  console.log("Finished draw");
  
}

