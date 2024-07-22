import express from "express";
const router = express.Router();
import ProductController from "./product.controller.js";

const productsController = new ProductController();

// Create a New product
router.post("/", (req, res) => {
  productsController.createProduct(req, res);
});

router.put("/:productId", (req, res) => {
  productsController.updateProductAvailability(req, res);
});

// Delete product by ID
router.delete("/:productId", (req, res) => {
  productsController.deleteProduct(req, res);
});

// List products by Genre
router.get("/products/genre/:genre'", (req, res) => {
  productsController.listProductsByGenre(req, res);
});

export default router;
