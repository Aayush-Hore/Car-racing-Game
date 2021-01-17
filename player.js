class Player{
    constructor(){
    this.name = null;
    this.index = null;
    this.distance = 0;  
    this.rank = null;
    }

    // getCount(), updateCount(count), update(name)

    getCount()  
    {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }

    updateCount(count)
    {
        database.ref('/').update({
            playerCount: count
        })
    }


    update()
    {
        var playerIndex = "players/player" + this.index;    
        database.ref(playerIndex).set({     // set() takes values in JSON format   
            name:this.name,
            distance: this.distance,
            rank : this.rank
        })
    }

    // Static functions - These are functions called by the class rather than the objects created from the class.
    
    static getPlayerInfo()  
    {
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{    // Arrow function - is used to bind the function to the original object created from the class
          allPlayers = data.val();
      })
    }

    // getCarsAtEnd - Refer to carsatend in the database
   getCarsAtEnd()
   {
     var CarsAtEndRef = database.ref('carsatend');
      CarsAtEndRef.on("value",(data)=>{
      this.rank = data.val();
      })

   }
    static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsatend : rank  
    })
    }


}