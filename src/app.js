const express = require('express')
const handlebars = require('express-handlebars')
const{Server} = require('socket.io')




const {PManager} = require ("./daos/File/productsManager.js")
const viewsRouter = require ("./routes/views.router copy.js")
const productsRouter = require ("./routes/products.router.js")
const cartsRouter = require ("./routes/carts.router.js")
const chatRouter = require ("./routes/chatRouter.js")
const { connectDb } = require('./config/index.js')
const {MenssageDaoMongo} = require ('./daos/Mongo/messagesManagerMongo.js')




const app = express()
const port = 8080
connectDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')


//CONFIGURACION DE RUTA

app.use('/', chatRouter)
app.use ('/', viewsRouter)
app.use('/api/products/', productsRouter)
app.use('/api/carts/', cartsRouter)
app.use(( err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send('Error de server')
})

const httpServer = app.listen(port, () => {
  console.log("funciona");
});



const io = new Server(httpServer)

//messagesModel

const MesaggeService = new MenssageDaoMongo;

//let messagesArray = [] //messageModel.find()

io.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    socket.on('message', data => {
      MesaggeService.getMessages//(data)
      console.log(MesaggeService.getMessages)
        io.emit('messageLogs', MesaggeService)
    })

    
})