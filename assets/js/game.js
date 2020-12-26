
//Game States
// "WIN" -Player robot has defeated all enemy robots
//      *Fight all enemy robots
//      *Defeat each enemy robot
// "LOS" -Player robot's health is zero or less
window.alert("Welcome to Robot Gladiators!");


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10
// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];

console.log(enemyName.length);
console.log(enemyName[0]);
console.log(enemyName[1]);
console.log(enemyName[2]);

var enemyHealth = 50;
var enemyAttack = 12;


for(var i = 0; i < enemyName.length; i++) {
    console.log(enemyName[i]);
    console.log(i);
    console.log(enemyName[i] + " is at " + i + " index ");
}




// this creates a function named fight

   
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
   

//if player chooses to fight then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;   
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }  else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value  of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;  
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has" + playerHealth + " health remaining."
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

// if no (false), ask question again by running fight() again
} else {
    promptFight();
}
    
   
        //var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
       
    



