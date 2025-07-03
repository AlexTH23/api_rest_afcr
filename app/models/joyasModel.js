const mongoose = require('mongoose')

const joyasSchema = mongoose.Schema({
    nombre:{
        type:String,
        requiered:true,
        length:50,
        unique:true
    },
    descripcion:{
        type:String,
        requiered:true,
        length:200
    },
    precio:{
        type:Number,
        requiered:true
    },
    peso:{
        type:Number,
        requiered:true
    },
    stock:{
        type:Number,
        default:10
    }
})

const joyasModel = mongoose.model('joyas',joyasSchema)

module.exports = joyasModel