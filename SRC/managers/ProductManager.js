const fs = require("fs");
const path = require("path");
class ProductManager {
    constructor() {
        this.filePath = path.join(__dirname, "../data/products.json");
        this.loadProducts();
    }
    loadProducts() {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath);
            this.products = JSON.parse(data);
        } else {
            this.products = [];
        }
    }

    saveProducts() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
    }

    getProducts() {
        return this.products;
    }
    getProductById(id) {
        return this.products.find((product) => product.id === id);
    }
    addProduct(product) {
        const newProduct = { id: Date.now(), ...product };
        this.products.push(newProduct);
        this.saveProducts();
        return newProduct;
    }
    updateProduct(id, updatedFields) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            const updatedProduct = { ...this.products[index], ...updatedFields };
            this.products[index] = updatedProduct;
            this.saveProducts();
            return updatedProduct;
        }
        return null;
    }

    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.saveProducts();
            return true;
        }
        return false;
    }
}

module.exports = ProductManager;
