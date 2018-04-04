var durImg;  // Declare variable 'img'.
var durImgT;  // Declare variable 'img'.
var table;
var tableDurer;
var currentYear;
var durerRows;
var itemRows;
var fr = 10;
var drawTrueMax = 9;
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
}

function setup() {
  //createCanvas(720, 400);
  prepareDurImages();
  var height = 8000;
  createCanvas(windowWidth, height);
  frameRate(fr);
  console.log("Here we are.");
  
}

function prepareDurImages(){
   var y = 0;
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
       durImgT = eImg;
       append(durerAllYearImages, eImg);
     }
     console.log("Found year ["+ year + "] durerAllYearImages.length: " + durerAllYearImages.length);
     allDurImages[year] = durerAllYearImages;
    }
}



function draw() {
  if(drawTrue >= drawTrueMax){
     return;
  }
  for(var p = 0; p < 900000000; p++){
       p = p;
  }

  console.log("DrawTrue count: " + String(drawTrue));
  drawTrue = drawTrue + 1;
  var imagesperrow = 6;
  var durImageY = 80;
  var durImageX = 100;
  for (var year = durStart; year < durEnd; year++) {
    var haveDur = allDurImages[year];
    durImageY = durImageY + 40;
    durImageX = 100;
    text(String(year), 1000, durImageY);
    //var div = createDiv('');
    //div.html( String(year), false );
    //div.style('z-index', '5000');
    //div.position(1000, durImageY);
    durImageY = durImageY + 40;
    if(haveDur.length == 0){
       console.log("No Dur image this year");
    }else{
     durImg = allDurImages[year];
     console.log("Number of Dur images this year "+durImg.length);
     for(var i = 0; i < durImg.length; i++){
       var img = durImg[i];
       if (imagesperrow > 0 ){
          image(durImg[i], durImageX, durImageY, durImg[i].width/3, durImg[i].height/3);
          durImageX = durImageX + img.width/3 + 10;
       }else{
          image(durImg[i], durImageX, durImageY, durImg[i].width/3, durImg[i].height/3);
          durImageY = durImageY + img.height/3 + 10;
          durImageX = 100;
          imagesperrow = 6; 
       }
       imagesperrow = imagesperrow - 1;
      }
    }
  }

}

