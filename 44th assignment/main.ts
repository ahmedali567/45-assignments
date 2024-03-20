// *Question 44:* Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "pasta");
make_sandwich("turkey", "cabbage", "chilli","carrot");
make_sandwich("avocado", "olive", "cucumber", "garlic","spicy");