window.alert("This is an alert!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Game States 
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots 
// * Defeat each enemy-robots 
// "LOSE" - Player robot's health is zero or less 

// check to see if the value of playerHealth variable is greater that 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

// note the lack of quotation around playerName
//console.log(playerName);

// You can log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robot Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames[0]);
console.log(enemyNames.length);

// Alert Players that they are starting the round
window.alert("Welcome to Robot Gladiator");

// this creates a function named "fight"
var fight = function(enemyName) {

    // repeat and execute as long as the enemy-robot is alive 
    while(playerHealth > 0 && enemyHealth > 0) {

    // Ask player if he wants to fight 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
    console.log(promptFight);

    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining."
    ); 

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

    // award player omey for winning
    playerMoney = playerMoney + 20;

    // leave while() loop since enemy is dead
        break;

    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        break;
    
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip confirm and then stop the loop 

    if (promptFight === "skip" || promptFight === "SKIP") {

    // Confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    // substract money from playerMoney skipping 
    playerMoney = playerMoney - 10; 
    console.log("playerMoney", playerMoney);
    break;
    }
}

    // if no (false), ask question again by running fight() again
    else {
        fight();
    }

    }

else {
    window.alert("You need to chose a valid option. Try again!")
}
};
    }

for(var i=0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));
    
    // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
    // reset enemyHealth before starting new fight
        enemyHealth = 50;
    
    // use debugger to pause script from running and check what's going on at that moment in the code
        debugger;
    
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}

console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);

//What is this ? logs "Our robot's name is" and the value asigned to playerName
console.log("Our robot's name is " + playerName);

//fight();
