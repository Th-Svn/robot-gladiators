window.alert("This is an alert!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// check to see if the value of playerHealth variable is greater that 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

// note the lack of quotation around playerName
//console.log(playerName);

// You can log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "fight"
var fight = function() {
    // Alert Players that they are starting the round
    window.alert("Welcome to Robot Gladiator");
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }

    else {
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
    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);

//What is this ? logs "Our robot's name is" and the value asigned to playerName
console.log("Our robot's name is " + playerName)

fight();
