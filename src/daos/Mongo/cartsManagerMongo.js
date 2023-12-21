const { cartsModel } = require("../../models/carts.model");




class CartsDaoMongo{
    constructor(){
        this.model= cartsModel
    }

    async getCart(){
        return await this.model.find()
    }

    async getCartById(cid){
        return await this.model.findById({id: cid});
    }
    

    async createCart (newCart){
        return await this.model.create(newCart)
    }
    
    async addProductToCart(cartId, productId, quantity) {
       
        const cart = await this.model.findById({ id: cartId });
        cart.products.push({
          id: productId,
          quantity,
        });
      
        return await cart.save();
      }
    
}

module.exports= CartsDaoMongo
