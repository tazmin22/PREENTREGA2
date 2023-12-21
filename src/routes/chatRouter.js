const { Router } = require('express')

//http://localhost:8080/chat

const router = Router()


router.get('/chat', (req,res) =>{
    res.render('chat', {
      title: 'CHAT',
      style: 'index.css'
    })
  })



module.exports = router