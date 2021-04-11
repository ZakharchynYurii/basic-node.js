//fs require - file system
//path require
//readFile - прочитати файл асинхронно readFile('file name', 'utf-8', callback(err, data))
//readFileSync - прочитити файл синхорнно, програма буде очікувати поки прочитається файл readFileSync('file name', 'utf-8')
//readdir - прочитати директорію readdir('dir name (path)', callback(err, data));
//extname - отримати розширення файлу path.extname('file name')
//statSync - отримати інформацію про файл fs.statSync or fs.stat
//writeFile - створити і записати в файл writeFile('file name (.txt, .json) and path', massage, callback);

const fs = require('fs');
const path = require('path');

// fs.readFile('newfile.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.readdir('folder', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data);
//         data.forEach(file => {
//             console.log(file + "   " + path.extname(file) + " " + fs.statSync("folder/"+file).size + 'b');
//         })
//     }
// })

// let text = fs.readFileSync('folder/file.txt', 'utf-8');
// console.log(text);

fs.writeFile('folder/secondFile', 'THis is text massage', (err) => {
    if(err){
        console.log(err)
    }
})