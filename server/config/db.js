const mongoose = require('mongoose');

const {DB_URL} = process.env;

exports.connectToDB = () =>{
    mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((conn)=>{

        console.log(`connected to db: ${conn.connection.name}`);
    }).catch(err=>{

        console.log(err.message);
    })
}