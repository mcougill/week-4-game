$(document).ready(function() {

    //Random number between 19-120
    var targetScore = Math.floor(Math.random() * 120) + 19;
    //Each crystal should have random value between 1-12
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    var playerScore = 0;
    var winCounter = 0;
    var lossCounter = 0;
  
   
   

    //Game restarts whenever player wins or loses
    function restart () {
    //Random number between 19-120
    targetScore = Math.floor(Math.random() * 120) + 19;
    //Each crystal should have random value between 1-12
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    playerScore = 0;
    $("#targetNumber").text(targetScore);
    };
    
    
//Player shown random number at start of game 
    $("#targetNumber").text(targetScore);
//Player clicks crystal and it adds points to player's score
    $("#crystal-1").on("click", function(){
        playerScore=playerScore+crystal1;
        $("#currentScore").text(playerScore);
        winLose();
        
    });
    $("#crystal-2").on("click", function(){
        playerScore+=crystal2;
        $("#currentScore").text(playerScore);
        winLose();
       
    });
    $("#crystal-3").on("click", function(){
        playerScore+=crystal3;
        $("#currentScore").text(playerScore);
        winLose();
        
    });
    $("#crystal-4").on("click", function(){
        playerScore+=crystal4;
        $("#currentScore").text(playerScore);
        winLose();
      
    });

   


   var winLose =  function() {
       //Player wins if their total score matches random number from beginning of game
        if (playerScore===targetScore) {
        winCounter ++;
        $("#winCounter").text(winCounter);
        $("#currentScore").text("0");
        alert("You win!");
        restart();
        
        
       
    }
    else if (playerScore>=targetScore) {
        //Player loses if score goes above random number
        lossCounter ++;
        $("#lossCounter").text(lossCounter);
        $("#currentScore").text("0");
        alert("You lose!");
        restart();
    }

};

winLose();

});

