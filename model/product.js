// Create a model class for the product with id, name, price, description, and image URL
class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}

module.exports = Product;