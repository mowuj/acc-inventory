const Product=require('../models/Product')
exports.getProductService = async () => {
    const products = await Product.find({})
   return products 
}

exports.createProductService = async (data) => {
   const product= await Product.create(data)
   return product
}