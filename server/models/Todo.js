const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({

    title:String,
    color:String,

    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    date:{
        type:Date,
        default:Date.now
    },
    tasks:[
        {

        taskTitle:String,

        checked:{
            type:Boolean,
            default:false
        },
        taskCreatedAt:{
            type:Date,
            default:Date.now
        },
        taskUpdatedAt:{
            type:Date,
            default:Date.now
        }

        }
    ]
},

{
    timestamps:true
}


)

module.exports = new mongoose.model('todo',TodoSchema)