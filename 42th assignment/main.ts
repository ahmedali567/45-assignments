// *Question 42:* Great Magicians: Add "the Great" to magician names.
// Function to make magicians great
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Ahsan", "Ahmed", "Farhan", "Fahad"];
let greatMagicians: string[] = make_great([...magicians]); // Creates a new array with great magicians
show_magicians(greatMagicians); // Shows modified names