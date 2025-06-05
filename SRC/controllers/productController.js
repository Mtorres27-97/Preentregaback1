const ProductManager = require("../managers/ProductManager");
const productManager = new ProductManager();

const getAllProducts = (req, res) => {
    const products = productManager.getProducts();
    res.json(products);
};

const getProductById = (req, res) => {
    const product = productManager.getProductById(req.params.pid);
    if (product) { res.json(product); } else { res.status(404).json({ error: "Producto no encontrado" }); }
};
const addProduct = (req, res) => {
    const newProduct = req.body;
    const addedProduct = productManager.addProduct(newProduct);
    res.status(201).json(addedProduct);
};
const updateProduct = (req, res) => {
    const updatedProduct = productManager.updateProduct(req.params.pid, req.body); if (updatedProduct) { res.json(updatedProduct); } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
};

const deleteProduct = (req, res) => {
    const success = productManager.deleteProduct(req.params.pid);
    if (success) { res.status(204).send(); } else { res.status(404).json({ error: "Producto no encontrado" }); }
};

module.exports = { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct, };
