//wrap the game in a startGame() function
//when the player is defeated and no more robots cann endGame() function (alert total stats, ask if want to play again,
// if yes startGame())
//after skip or defeat and more bots to fight ask if want to shop-if no continue, if yes go to shop()function, give options to 
//refill health, upgrade attac, or leave shop-if refill subtract money, if upgrade subtract money and increase attack power
//if leave alert good bye and exit, if an invalid optin call shop() again
//function to set player name


var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  //if (playerInfo.name = name) {
   console.log("Your robot's name is " + name);
   return name;    
    
  }  


var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },

refillHealth: function() {
  if (this.money >= 7) {
  window.alert("Refilling player's health by 20 for 7 dollars.");
  this.health += 20;
  this.money -= 7;
  }
  else {
  window.alert("You don't have enough money!");
  }
},
upgradeAttack: function() {
  if (this.money >= 7) {
    window.alert("Refilling player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
    }
    else {
    window.alert("You don't have enough money!");
    }  
}
};


//function to generate random numeri value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value
};

var enemyInfo =[
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Tumble",
    attack: randomNumber(10, 14)
  }
];
//console.log(enemyInfo.names);
//console.log(enemyInfo.names.length);
//console.log(enemyInfo.names[0]);
//console.log(enemyInfo.names[3]);


var fightOrSkip = function() {

//var promptFight = promptFight.toLowerCase();
  //ask if like to fight or skip
  //if (promptFight === "skip") {

  while(enemyInfo.health > 0 && playerInfo.health > 0) {
    fightOrSkip();
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  }
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
  
 
  // conditional recursive function call here
  //if (promptFight === "" || promptFight === null) {
    //window.alert("You need to provide a valid answer! Please try again!");
    //return fightOrSkip();
  }

  //if "SKIP" confirm and stop the loop
  if (fightOrSkip === "skip"|| fightOrSkip === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.alert("Are you sure you'd like to quit?");

    //if yes (true) leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
      //subtract money for skip
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      //return true if player wants to leave
      //return true;      
      }
    }
// fight function (now with parameter for enemyInfo's name)
var fight = function(enemyInfo) {

    //keep track of who goes first
    var isPlayerTurn = true;
    //randomly change order
    if (Math.random() > 0.5) {
      isPlayerTurn = false;
    }
    while (playerInfo.health > 0 && enemyInfo.health > 0) {
      if (isPlayerTurn) {
        //ask if fight or skip
        if (fightOrSkip()) {
          //if true break loop
          break;
        }
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        //remvoe enemyInfo health
        enemyInfo.health = Math.max(0, enemyInfo.health - damage);
        console.log (
          playerInfo.name +
          " attacked " +
          enemyInfo.name + ". " + enemyInfo.name + " now has " + enemyInfo.health + " health remaining. "
        );
          //check enemyInfo;s health
          if (enemyInfo.health <=0) {
            window.alert(enemyInfo.name + " has died!");
            //award player money for winning
            playerInfo.money = playerInfo.money = 20;

            //leave while() loop since enemyInfo dead
            break;
          }else {
            window.alert(enemyInfo.name + " still has " + enemyInfo.health + " health left.");
          }
          //player gets attacked first
        } else {
          var damage = randomNumber(enemyInfo.attack - 3, enemyInfo.attack);
          //remove players health
          playerInfo.health = Math.max(0, playerInfo.health - damage);
          console.log(
            enemyInfo.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
          );

          //check palyer health
          if (playerInfo.health <=0) {
            window.alert(playerInfo.name + " has died!");
            //leave loop if dead
            break;
          } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");

          }
          }
          //switch order for next round
          isPlayerTurn = !isPlayerTurn;
        }

      };
    
  
  while (enemyInfo.health > 0 && playerInfo.health > 0) {
    // ask player if they'd like to fight or run
    fightOrSkip();
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // if player picks "skip" confirm and then stop the loop
    if (fightOrSkip === "skip"|| fightOrSkip === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight.');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);

        break;
      }
    };

    // remove enemyInfo's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemyInfo.health = Math.max(0, enemyInfo.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemyInfo.name + '. ' + enemyInfo.name + ' now has ' + enemyInfo.health + ' health remaining.'
    );

    // check enemyInfo's health
    if (enemyInfo.health <= 0) {
      window.alert(enemyInfo.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemyInfo is dead
      break;
    } else {
      window.alert(enemyInfo.name + ' still has ' + enemyInfo.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyInfo.attack variable
    var damage = randomNumber(enemyInfo.attack - 3, enemyInfo.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemyInfo.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  };


//shop function
var shop = function() {
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt (
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 to REFILL, 2 for UPGRADE, or 3 to LEAVE."
  );
};

if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
  //ask if player wants to shop
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
  //if yes go shopping
  if (storeConfirm) {
    shop();
  }
  //use switch to carry out option
 shopOptionPrompt = parseInt(shopOptionPrompt); 
switch (shopOptionPrompt) {
  case 1:  
    playerInfo.refillHealth();
    break;

case 2:
 playerInfo.upgradeAttack();
  break;
  
case 3:
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
    playerInfo.reset();
};
// fight each enemyInfo-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyInfo.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    

    // pick new enemyInfo to fight based on the index of the enemyInfo.names array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemyInfo.health before starting new fight
     pickedEnemyObj.health = randomNumber(40, 60);    

    // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemyInfo.name parameter
    fight(pickedEnemyObj);

    //if we're not at the last enemyInfo
    if (playerInfo.health > 0 && i < enemyInfo.length - 1 ) {
      shop();
    }
  }
 
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
 //after the loop ends player is either out of healthe or enemies
// endGame();
}
//play again
startGame();     
//start game when page loads
//startGame();


//end the entire game
var endGame = function(){
  window.alert("The game has now ended. Let's see how you did!");

  // check local storage for high score
var highScore = localStorage.getItem("highscore");
if (highScore === null) {
  highScore = 0;
}
//if more moneny than high score
if (playerInfo.money > highScore) {
  localStorage.setItem("highscore", playerInfo.money);
  localStorage.setItem("name", playerInfo.name);

  alert(playerInfo.name + " now had the high score of " + playerInfo.money + "!");
}
else {
  alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
}
//ask if like to play again
var playAgainConfirm = window.confirm("Would you like to play again??"); 
if (playAgainConfirm) {
  startGame();
} else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};

    //if player still alive
    if (playerInfo.health > 0) {
window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }


    
// ask player to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    //restart game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back real soon!");
}


