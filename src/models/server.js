const mongoose = require('mongoose')

const serverSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    serverID:{
        type: String,
        required: true,
    },
    memberCount: {
        type: Number,
        default: false
    },
    iconURL:{

    }
          
},{
    timestamps:true
})

const Server = mongoose.model('Server',serverSchema)

module.exports = Server