var playerName = window.prompt("What is your robot's Name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//create function 
var fight = function(enemyName) {
    // repeat and execute as long as the eneme is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    //ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
   
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + 'has decided to skip this fight. Goodbye!');
            //subtract money form player for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        }
    }
    
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemys health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
        
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
        break;
    }
    else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    
        }
}   else {
        window.alert("You need to choose a valid option. Try again!");
}
    }


};

//execute funtion
    
    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0) {
            // let player know what roudn they are in, remember that arrays start at index 0 so need to add i + 1
            window.alert("welcome to robot glads! Round " + ( i + 1 ) );

            //pick new enemy to fight based on the index of trhe enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 50;

            //use debugger to pause script from running and check what goin on
            // debugger;

            //pass the pickedEnemyName variable's value into the fight function, where it will assuem the value of the enemyName parameter
            fight(pickedEnemyName);
        }
        else {
            window.alert("you have lost your robot in battle! Game over!");
            break;
        }
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
