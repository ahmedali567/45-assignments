// Q14 making a list that includes at least three people i like to invite on dinner. 
// then using my list to printing a messsage to each person, inviting them to dinner.
var guests = ["Farhan", "Ahmed ", "Ahsan"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
