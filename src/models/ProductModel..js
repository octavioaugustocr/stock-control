const pool = require('../config/db');

class ProductModel {
    static async getAll() {
        const [products] = await pool.query('SELECT * FROM products');
        return products;
    }
}

module.exports = ProductModel;