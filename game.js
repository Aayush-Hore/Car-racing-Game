class Game{
    constructor()
    {

    }

    getState()
    {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
    }) 
    }

   update(state)
   {
        database.ref('/').update({
        gameState: state
        })
    }   

    // writing code using abstraction - objects are created, functions are called even before the classes are written. 
    async start(){
        if(gameState===0)
        {
           player = new Player();   

           var playerCountRef = await database.ref('playerCount').once("value");

           if(playerCountRef.exists())
           {
               playerCount = playerCountRef.val();
               player.getCount();
           }
           form = new Form();
           form.display();  
        }

        car1 = createSprite(100,700);
        car2 = createSprite(300,700);
        car3 = createSprite(500,700);
        car4 = createSprite(700,700);
        cars = [car1,car2,car3,car4];
        car1.addImage(car1Image);
        car2.addImage(car2Image);
        car3.addImage(car3Image);
        car4.addImage(car4Image);
    }   
    
    play()
    {
        form.hide();    
       
        textSize(30);
       text("Game Starting",120,100); 
       Player.getPlayerInfo();  //Player class calls the static getPlayerInfo() function
       player.getCarsAtEnd();
       

       if(allPlayers != undefined)  // to check whether allPlayers has been defined
       {   
           background(groundImage);

           image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            var displayPosition = 130;
            // x and y position of the cars
                var x = 200;    
                var y;
                var index = 0;
                
            // for loop to access each player stored in allPlayers
            for(var plr in allPlayers)  //for each loop
            {

                index = index+1;    // loop variable for cars array.
                //position the cars a little away from each other in x direction
                x = x+300;
                //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;

                cars[index-1].x = x;
                cars[index-1].y = y;

                // game camera follows the player car on the tab
                if(index === player.index)
                {
                    stroke(10);
                    fill("brown");
                    circle(x,y,70)
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }



                //if(plr === "player"+player.index)
                
               //     fill("red")
                
               // else
                
               //     fill("black")
                

             //   displayPosition = displayPosition + 25;
            // textSize(15)
            // text(allPlayers[plr].name + ":" +allPlayers[plr].distance,120,displayPosition)
            }

       }

       if(keyDown(UP_ARROW) && player.index!=null){
        player.distance = player.distance+10;
        player.update();
        }

        if(player.distance>5170){
        gameState=2;
        player.rank = player.rank+1;
        Player.updateCarsAtEnd(player.rank);
        }
       
        drawSprites();
    }
        end()
        {
        console.log("The Game Has Ended");
        console.log(player.name+" has achieved rank: "+player.rank);       // Try to show name of the player and the rank
        
     }
}