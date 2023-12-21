const { Schema, model } = require('mongoose')

const MesaggeSchema = new Schema({
    user:{
        type:String
    },
    message:{
        type: String
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});
const messagesModel = model('messages', MesaggeSchema)

module.exports = {
   messagesModel
}