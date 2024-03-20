// Q15 Changing Guest List: One of mine guests can't make it to the dinner, 
// so i need to send out a new set of invitations with a replacement guest.



let guests = ["Farhan", "Ahmed", "Ahsan"]; // Initializing the guests array

let unableToAttend = "farhan";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replacing the guest
let newGuest = "ahmed";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
