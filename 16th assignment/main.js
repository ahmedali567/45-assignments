// Q16 more guest, I have found a bigger dinner table so let's ivite the others.
var guests = ["Ahmed", "Ahsan", "Farhan"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests beacuse I have space for them.
guests.unshift("Ali");
guests.splice(guests.length / 2, 0, "Areeb");
guests.push("fahad");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
