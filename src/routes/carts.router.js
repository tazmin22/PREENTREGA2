const {Router} = require('express')
//const CartsManagerFile = require ("../CartsManager.js");
const CartsDaoMongo = require('../daos/Mongo/cartsManagerMongo.js');


const router = Router();
//const carrito = new CartsManagerFile ('./carrito.json')

const cartsService = new CartsDaoMongo;


router
.get ("/", async (req,res)=> {
  try{
    const carts = await cartsService.getCart();
    res.status(200).send({
              status:"sucess",
              payload: carts
          }
          )

  } catch(error){
    console.log(error)

  }
  
});



router.get('/:cid', async (req,res)=>{
    try {
        const {cid} = req.params
        const cart = await cartsService.getCartById(parseInt(cid))
        res.send({
            status: 'success',
            payload: cart
        })
        
    } catch (error) {
        console.log("error al traer productos")
    }
})



router.post('/:cid/product/:pid' , async (req, res) => {
 const cid = req.params.cid;
 const pid = req.params.pid;

 const resp = await cartsService.addProduct(cid,pid)

 if (typeof (resp) === "string") {
  res.status(400).json({
   status: "fail",
   data: resp
 })} else {
  res.status(200).json({
   status: "ok",
   data: cartsService.items.push(pid)
 })}
})




module.exports = router