const fs = require('fs');
const text = require("./text.json");

const person = {
    name: 'Yurii',
    secondName: 'Zakharchyn',
    age: 21
}

fs.writeFile('text.json', JSON.stringify(person), err => {
    if(err){
        console.log(err)
    }
});

console.log(text)