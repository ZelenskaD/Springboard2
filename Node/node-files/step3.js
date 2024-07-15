const fs = require('fs');
const axios = require('axios');

const args = process.argv.slice(2);
let outputPath;
let path;

// Determine if --out flag is used and set outputPath and path variables accordingly
if (args[0] === '--out') {
    outputPath = args[1];
    path = args[2];
} else {
    path = args[0];
}

function handleError(err, operation) {
    console.error(`Error ${operation}:\n  ${err}`);
}

function handleSuccess(data, outputPath) {
    if (outputPath) {
        fs.writeFile(outputPath, data, 'utf8', (err) => {
            if (err) {
                handleError(err, `writing ${outputPath}`);
                return;
            }
            console.log(`Successfully wrote to ${outputPath}`);
        });
    } else {
        console.log(data);
    }
}

function cat(filePath, outputPath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            handleError(err, `reading ${filePath}`);
            return;
        }
        handleSuccess(data, outputPath);
    });
}

async function webCat(url, outputPath) {
    try {
        const response = await axios.get(url);
        handleSuccess(response.data, outputPath);
    } catch (err) {
        handleError(err, `fetching ${url}`);
    }
}

function isURL(str) {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

if (path) {
    if (isURL(path)) {
        webCat(path, outputPath);
    } else {
        cat(path, outputPath);
    }
} else {
    console.error("Please provide a file path or URL as an argument.");
}
