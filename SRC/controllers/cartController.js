const CartManager = require("../managers/CartManager");
const cartManager = new CartManager();
const createCart = (req, res) => { const newCart = cartManager.createCart(); res.status(201).json(newCart); };
const getCartProducts = (req, res) => {
    const cart = cartManager.getCartById(req.params.cid);
    if (cart) {
        res.json(cart.products);
    }
    else {
        res.status(404).json({ error: "Carrito no encontrado" });
    }
};

const addProductToCart = (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const updatedCart = cartManager.addProductToCart(cid, pid, quantity);
    if (updatedCart) {
        res.json(updatedCart);
    }
    else {
        res.status(404).json({ error: "Carrito o producto no encontrado" });
    }
};
module.exports = { createCart, getCartProducts, addProductToCart };
