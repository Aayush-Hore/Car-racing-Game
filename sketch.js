var form,player,game;
var database,gameState=0;
var playerCount,allPlayers,distance=0;
var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image,groundImage,trackImage;
function preload(){
car1Image = loadImage("car1.png");
car2Image = loadImage("car2.png");
car3Image = loadImage("car3.png");
car4Image = loadImage("car4.png");
groundImage = loadImage("ground.png");
trackImage = loadImage("track.jpg");
}
function setup()
 {
    createCanvas(1700,1300);
    database = firebase.database()
    game = new Game();
    game.getState();
    game.start();

 }
function draw(){
    
  if(playerCount===4){
   game.update(1);

   }
   if(gameState===1){
    game.play();
  
   }
   if(gameState===2){

      game.end();
   }
}