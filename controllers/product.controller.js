const { getProductService, createProductService } = require("../services/product.services")

exports.getProducts = async (req, res, next) => {
  try {
    // const products = await Product.where("name").equals(/\w/)
    //   .where("quantity").gt(100).lt(600)
    //   .limit(2).sort({quantity:-1})
    const products=await getProductService()
    res.status(200).json({
      status: "success",
      data:products
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message:"can't get the data",
      error:error.message
    })
  }
}
exports.createProduct=async(req, res, next) => {
  // save or create
  try {
    
    const result =await createProductService(req.body)

    result.logger()
    // const product = new Product(req.body)
    // if (product.quantity == 0) {
    //   product.status='out-of-stock'
    // }
    // const result= await product.save()
  res.status(200).json({
    status: 'success',
    message: "Data inserted successfully",
    data:result
  })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Data is not inserted',
      error: error.message
    })
  }  
}