const fs = require ('fs');

// fs.readFile('poem.txt', 'utf8', (err, data) =>{
//     if(err){
//         console.log("ERROR:", err);
//         process.kill;
//     }
//     console.log("DATA...", data)
// })


// const line = 'Piska sosiska pravit mirom';
//
// fs.writeFile('poem.txt', line, {encoding:'utf8', flag: 'a'}, err=>{
//     if(err){
//         console.log(err);
//         process.kill;
//     }
//     console.log("IT WORKED!")
// })

const line = 'Piska sosiska pravit mirom';

fs.appendFile('poem.txt', "\n APPEND ME!!!", 'utf8', err=>{
    if(err){
        console.log(err);
        process.kill;
    }
    console.log("IT WORKED!", data)
})