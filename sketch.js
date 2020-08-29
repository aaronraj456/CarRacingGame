var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var Rank;

var form, player, game;

var cars, car1, car2, car3, car4;

var trackImage;
var car1Image;
var car2Image;
var car3Image;
var car4Image;
var groundImage;

function preload(){
  trackImage = loadImage("../images/track.jpg");
  groundImage = loadImage("../images/ground.png");
  car1Image = loadImage("../images/car1.png");
  car2Image = loadImage("../images/car2.png");
  car3Image = loadImage("../images/car3.png");
  car4Image = loadImage("../images/car4.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  console.log(player.distance);

  /*text("player"+player.index, player.x, player.y);
  textSize(20);*/
  
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
