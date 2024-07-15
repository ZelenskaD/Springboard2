const fs = require('fs');
const path = process.argv[2]; // get the file path from command line argument

function cat(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${filePath}:\n  ${err}`);
            return;
        }
        console.log(data);
    });
}

// Call the cat function with the provided path
if (path) {
    cat(path);
} else {
    console.error("Please provide a file path as an argument.");
}
