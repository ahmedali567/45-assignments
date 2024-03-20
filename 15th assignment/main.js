// Q15 Changing Guest List: One of mine guests can't make it to the dinner, 
// so i need to send out a new set of invitations with a replacement guest.
var guests = ["Farhan", "Ahmed", "Ahsan"]; // Initializing the guests array
var unableToAttend = "farhan";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replacing the guest
var newGuest = "ahmed";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
