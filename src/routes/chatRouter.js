const { Router } = require('express')
const { MenssageDaoMongo } = require('../daos/Mongo/messagesManagerMongo');
const router = Router();
const messageService = new MenssageDaoMongo()

//http://localhost:8080/chat




router.get('/chat', (req,res) =>{
    res.render('chat', {
      title: 'CHAT',
      style: 'index.css'
    })
  });

  router.get ("/chat", async (req,res)=> {
    try{
      const message = await messageService.getMessages();
      res.status(200).send({
                status:"sucess",
                payload: message
            }
            )
  
    } catch(error){
      console.log(error)
  
    }
    
  });


  router.post ('/', async (req,res)=>{
    try {
      const newMessage = req.body
      if (!newMessage.message){
        return res.status(400).send({
          status: error,
          payload: 'Faltan completar campos obligatorios'
        })
      }
      res.send ('post message')
      
    } catch (error) {
      console.log(error)
    }
    
  })

module.exports = router