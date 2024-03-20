// // Q17 Unfortunately, I can only invite two people for dinner because of time issue.
// // so, lets do this and invite only two peoples.

// Defining the initial list of guests
let guests = ["Ahmed", "Ahsan", "Fahad", "Farhan", "Ghani"];

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
