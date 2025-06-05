const express = require("express");
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct,} = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:pid", getProductById);
router.post("/", addProduct);
router.put("/:pid", updateProduct);
router.delete("/:pid", deleteProduct);

module.exports = router;
