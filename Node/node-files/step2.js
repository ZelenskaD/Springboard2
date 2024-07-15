const fs = require('fs');
const axios = require('axios');
const path = process.argv[2]; // get the file path or URL from command line argument

function cat(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${filePath}:\n  ${err}`);
            return;
        }
        console.log(data);
    });
}

async function webCat(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (err) {
        console.error(`Error fetching ${url}:\n  ${err}`);
    }
}

// Function to determine if the argument is a URL
function isURL(str) {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

// Call the appropriate function based on the argument type
if (path) {
    if (isURL(path)) {
        webCat(path);
    } else {
        cat(path);
    }
} else {
    console.error("Please provide a file path or URL as an argument.");
}
