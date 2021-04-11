const mysql = require('mysql');

// конфігурація пакетів

const connection = mysql.createConnection({
    host: "itgid.mysql.tools",
    user: "itgid_nodetest",
    database: "itgid_nodecourse",
    password: "A16gAi50YiB0",
})

connection.connect(err => {
    if(err){
        console.log(err);
        return err
    }else{
        console.log('All right')
    }
})

let query = 'SELECT * FROM user';

connection.query(query, (err, result, fields) => {
    console.log(err);
    console.log(result);
    // console.log(fields);
})

connection.end(err => {
    if(err){
        console.log(err);
        return err
    }else{
        console.log('Close')
    }
});