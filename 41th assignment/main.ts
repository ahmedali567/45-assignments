// Q41 Displaying magicians names from an array.
let magicians: string[] = ["Ahmed", "Ahsan", "Farhan"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);