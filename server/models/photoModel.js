const mongoose = require('mongoose')
const schema = mongoose.Schema

const photoModel = new schema({
    url: { type: String} ,
    name: { type: String},
    type: { type: String},
})

module.exports = mongoose.model('photos', photoModel)