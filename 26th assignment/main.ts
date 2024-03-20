// *Question 26:* Alien Colors #2: Choose a color for an alien, then write an if-else chain.
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// * writing an if statement to test whether the alien's color is green. if it is, print
// a message that the player just earned 5 points.

// * writing one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

// Version that runs the if block:

let alien_color: string = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}

// Version that runs the else block:

alien_color = "Red";

if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}
