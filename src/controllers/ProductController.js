const ProductModel = require ('../models/ProductModel.');

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await ProductModel.getAll();
            
            res.status(200).json(products);
        } catch (error) {
            console.error('Error when searching for products:', error);
            res.status(500);
        }
    }
}

module.exports = ProductController;