
//Game States
// "WIN" -Player robot has defeated all enemy robots
//      *Fight all enemy robots
//      *Defeat each enemy robot
// "LOS" -Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;




// You can also log multiple values at once like this
window.alert("Welcome to Robot Gladiators!");

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;




var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'); {
var fight = function(enemyNames) {


for(var i = 0; i < enemyNames.length; i++) { 
    fight(enemyNames[i]);  
    console.log(enemyNames[i]);
    console.log(i);
   // console.log(enemyNames[i] + " is at " + i + " index");
    
}
// this creates a function named fight
}

//if player chooses to fight then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;   
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died! ");
    }  else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value  of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;  
    console.log(
        enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    ); 
    
    //check player health
    if (playerHealth <= 0)  {
        window.alert(playerName + " has died! ");
    }   else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
}

//if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");
    
    // if yes (true), leave fight
    if (confirmSkip) {
     
    window.alert(playerName + " has decided to skip this fight.");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
}
// if no (false), ask question again by running fight() again
else {
    fight(enemyNames);
}

   // window.alert ("You need to pick a valid option. Try again!");


//fight();   
   
        //var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
       
    
}


