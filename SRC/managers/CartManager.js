const fs = require("fs");
const path = require("path");
class CartManager {
    constructor() {
        this.filePath = path.join(__dirname, "../data/carts.json");
        this.loadCarts();
    }
    loadCarts() {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath);
            this.carts = JSON.parse(data);
        } else {
            this.carts = [];
        }
    }
    saveCarts() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.carts, null, 2));
    }
    createCart() {
        const newCart = { id: Date.now(), products: [] };
        this.carts.push(newCart);
        this.saveCarts();
        return newCart;
    }
    getCartById(id) {
        return this.carts.find((cart) => cart.id === id);
    }
    addProductToCart(cid, pid, quantity) {
        const cart = this.getCartById(cid);
        if (cart) {
            const productIndex = cart.products.findIndex((p) => p.product === pid);
            if (productIndex !== -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ product: pid, quantity });
            }
            this.saveCarts();
            return cart;
        }
        return null;
    }
}
module.exports = CartManager;
