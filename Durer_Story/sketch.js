var tableDurer;
var durerRows;
var fr = 10;
var drawTrueMax = 1;
var drawTrue = 0;
var margin = 150;
var file;
var width = 250;
var height = 250;
var yearText;
var durTextYear = [];
var allDurImages ={};
var durStart = 1480;
var durEnd = 1526;
var durAge = 9;

function preload() {
  tableDurer = loadTable('durer.csv', 'csv', 'header');
  console.log("Preparing dur images");
  prepareDurImages();
}

function setup() {
  createCanvas(windowWidth, windowHeight * 100);
  //frameRate(fr);
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
}


function draw() {
  //if(drawTrue >= drawTrueMax){
  //   return;
  //}
  var durImg;
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

  drawTrue = drawTrue + 1;
}

