class Form{
    constructor()
    {
     this.input = createInput("Name")   
     this.button = createButton('Play');
     this.greeting = createElement('h3');
     this.reset = createButton('Reset');
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display()
    {
        var title = createElement('h2');
        title.html("Multiplayer Car Racing Game");
        title.position(130,20);     
        
        this.input.position(130,150);
        this.button.position(130,200);
        this.reset.position(1650,50);
        //mousePressed() takes a function as an input, and instructions on what's supposed to happen when the button is pressed is written here
        this.button.mousePressed(()=>{  // arrow function will bind the function instructions to the form object

            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();    // update() function will be defined in Player.js

            player.updateCount(playerCount);    //updateCount() function will be defined in Player.js
                    
            this.greeting.html("Hello"+player.name)
            this.greeting.position(130,150);
            
        })
        this.reset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        Player.updateCarsAtEnd(0);
        player.distance = 0;
        player.rank = 0;
        })
    }
}


/*
HTML stands for HyperText Markup Language.
HTML contains elements which define the structure of a page. A simple HTML page contains:
    1. head: All the scripts and stylesheets for the webpage is added. 
    2. body: Where all the content of the page is added.

The body of an HTML page can contain several types of elements. Some of them are:

    1. Headings: h1, h2, h3 tags - display headings of different sizes. 
    2. input: To collect input from a user.
    3. button: To display a button

    This model of an HTML page is called a Document Object Model (DOM). We are going to use the p5 DOM library to create the form.


*/