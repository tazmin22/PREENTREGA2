

const { Schema, model } = require('mongoose')

const cartsSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    tittle: {
        type: String,
        required: true
    }
})

const cartsModel = model('carts', cartsSchema)

module.exports = {
    cartsModel
}