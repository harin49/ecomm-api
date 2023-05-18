// Create a function to get product by id to filter products from productMock.js based on the id:
const MOCKPRODUCTS = require('../mock/productMock');

exports.getProductById = (req, res, next) => {
    const productId = req.params.productId;
    const product = MOCKPRODUCTS.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }
    res.status(200).json({
        product: product
    });
}