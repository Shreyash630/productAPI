import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import productsRouter from "./src/features/products/product.routes.js";

const app = express();
app.use(express.json());
app.use("/api/products", productsRouter);

export default app;