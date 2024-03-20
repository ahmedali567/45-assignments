// *Question 37:* Large Shirts: Default values in make_shirt().
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Defaulting large and message
make_shirt("medium"); // Defaulting message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
export {};
