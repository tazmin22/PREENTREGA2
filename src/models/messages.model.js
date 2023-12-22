const { Schema, model } = require('mongoose')

const MessagesCollection = "Mensajes"

const MessagesSchema = new Schema({
    user:{
        type:String
    },
    message:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});
const messagesModel = model('messages', MessagesSchema)

module.exports = {
   messagesModel
}