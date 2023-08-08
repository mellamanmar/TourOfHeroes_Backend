const mongoose = require('mongoose')

const Schema = mongoose.Schema
const HeroSchema = new Schema ({
    name: {
        type:String,
        require: true,
        maxLength:100
    },
    super_power:{
        type:String,
        require: true,
        maxLength:100
    },
    level:{
        type:Number,
        require:true,
        default:10
    }
    // date_of_birth: { type: Date },
    // date_of_death: { type: Date },
})

module.exports = mongoose.model('Hero', HeroSchema)
