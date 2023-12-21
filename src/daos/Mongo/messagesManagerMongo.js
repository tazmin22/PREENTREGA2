const { messagesModel } = require("../../models/messages.model");

messagesModel

class MenssageDaoMongo{
    constructor(){
        this.model= messagesModel

    }

    async addMessage (newMessage){
        await this.model.create(newMessage)
        return await this.getMessages()
      }
    
      async getMessages (){
        try {
          return await this.model.find({})
        } catch (error) {
          console.log(error);
        }
      }
}

module.exports= MenssageDaoMongo
