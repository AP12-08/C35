class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
    gameState=data.val();
        }
        )
    }
    
    updateState(State){
        database.ref("/").update({
          gameState:State
        })
    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getcount();
            form=new Form();
            form.display();

        }
    }
}