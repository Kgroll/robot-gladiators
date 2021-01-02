//wrap the game in a startGame() function
//when the player is defeated and no more robots cann endGame() function (alert total stats, ask if want to play again,
// if yes startGame())
//after skip or defeat and more bots to fight ask if want to shop-if no continue, if yes go to shop()function, give options to 
//refill health, upgrade attac, or leave shop-if refill subtract money, if upgrade subtract money and increase attack power
//if leave alert good bye and exit, if an invalid optin call shop() again


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


//function to generate random numeri value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value
};




var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
//console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
 
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
 
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);

        break;
      }
    }
 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );
 
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
 
      // award player money for winning
      playerMoney = playerMoney + 20;
 
      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');
 
      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
 
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }
 
    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );
 
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

//shop function
var shop = function() {
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt (
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
};

if (playerHealth > 0 && i < enemyNames.length - 1) {
  //ask if player wants to shop
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
  //if yes go shopping
  if (storeConfirm) {
    shop();
  }
  //use switch to carry out option
switch (shopOptionPrompt) {
  case "REFILL": //new case
  case "refill":
    if (playerMoney >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars");

    //increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    
    }
    break;
case "UPGRADE"://new case
case "upgrade": 
  if (playerMoney <= 7) { 
  window.alert("Upgrading player's attack by 6 for 7 dollars");

  //increase attack and decrease money
  playerAttack = playerAttack + 6;
  playerMoney = playerMoney - 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
  break;
case "LEAVE": //new case
case "leave":
  window.alert("Leaving the store.");

  //do nothing, function will end
  break;
default:
  window.alert("You did not pick a valid option. Try again.");
  //call shop again
  shop();
  break;
}

}



//function to start new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
};
  // ask player what they'd like to do

    // reset enemyHealth before starting new fight
     enemyHealth = Math.floor(Math.random() * 21) + 40;    

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    //if we're not at the last enemy
    if (playerHealth > 0 && i < enemyNames.length - 1 ) {
      shop();
    }
  
 
  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 'refill': //new case
    case 'REFILL': {
      if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      //increase health decrease money
      playerHealth += 20;
      playerMoney -= 7;
  }
  else {
  window.alert("You don't have enough money!");
  }
      break;
}


    
// ask player to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    //restart game
    startGame();
}
else {
  window.alert("You don't have enough money!");
}
      break;
    case 'leave'://new case
    case 'LEAVE':
      window.alert('Leaving the store.');
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      shop();
      break;
  }

 
// start first game when page loads
startGame();
