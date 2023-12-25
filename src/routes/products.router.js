//CRUD//


const {Router} = require('express')
const ProductDaoMongo = require('../daos/Mongo/productManagerMongo');
const router = Router();

const productsService = new ProductDaoMongo()

router
.get ("/", async (req,res)=> {
  try{
    const products = await productsService.getProducts();
    res.status(200).send({
              status:"sucess",
              payload: products
          }
          )

  } catch(error){
    console.log(error)

  }
  
});

router.post ('/', async (req,res)=>{
  try {
    const newProduct = req.body
    if (!newProduct.tittle||newProduct.id||newProduct.description||newProduct.stock||newProduct.code||newProduct.thumbnail){
      return res.status(400).send({
        status: error,
        payload: 'Faltan completar campos obligatorios'
      })
    }
    res.send ('post products')
    
  } catch (error) {
    console.log(error)
  }
  
})


router
.get ("/pid", async (req,res)=> {
  try{
    const {pid} = req.params
    const productos = await productsService.getProductsById(parseInt(pid))
    res.status(200).send({
              status:"sucess",
              payload: productos
          }
          )

  } catch(error){
    console.log(error)

  }
  
});


router
.put ("/pid", async (req,res)=> {
  try{
    const {pid} = req.params
    const productos = await productsService.getProductsById(parseInt(pid))
    const updateData = {
            title: req.body.title || product.title,
            description: req.body.description || product.description,
            price: req.body.price || product.price,
            thumbnail: req.body.thumbnail || product.thumbnail,
            code: req.body.code || product.code,
            stock: req.body.stock || product.stock,
          };
        productsService.products[productsService.products.indexOf(product)] = updateData;
         res.status(200).send({
              message: 'Producto actualizado correctamente.',
              status:"sucess",
              payload: productos
          }
          )

  } catch(error){
    console.log(error)

  }
  
});



router
.delete ("/pid", async (req,res)=> {
  try{
    const {pid} = req.params
    const productos = await productsService.getProductsById(parseInt(pid))
    productsService.products.splice(productsService.products.indexOf(product),1);
    res.status(200).send({
              mesagge:"producto eliminado correctamente",
              status:"sucess",
              payload: productos
          }
          )

  } catch(error){
    console.log(error)

  }
  
});


router
.post("/", async (req, res) => {
  try {
    const { title, price, code } = req.body;

    const product = await productManager.addProduct({ title, price, code });

    const products = await productManager.getProducts();

    // Emitimos a todos la lista actualizada
    req.app.get("io").sockets.emit("products", products);

    return res.json({ success: true, data: product });
  } catch (error) {
    console.log(error);

    const code = error.statusCode ?? 500;
    return res.status(code).json({ success: false, error: error.message });
  }
});


module.exports = router