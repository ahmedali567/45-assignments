// Q13 Thinking of my favourite mode of transportation such as a motorcycle or a car, 
// and making a list that stores several examples,
// and also using my list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
var transports = ["heavy bike", "audi car", "mountain bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
