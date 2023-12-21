const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    tittle: {
        type: String,
        required: true
    },
    descirption: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        
    },
    code: {
        type: Number,
        required: true,
        unique: true
    },
    thumbnai: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    isActive:{
        type: Boolean,
        default:true
    }
})

const productModel = model('products', productSchema)

module.exports = {
    productModel
}