import mongoose from 'mongoose';
import { productSchema } from './product.schema.js'


// creating model from schema.
const productsModel = mongoose.model('Product', productSchema);




export default class ProductRepository {
    async createProduct(productData) {
        const product = new productsModel(productData);
        const savedProduct = await product.save();
        return savedProduct;
    }

   

  

    async listProductsByGenre(genre) {
        try{
        const products = await productsModel.find({genre});
        return products;
        }
        catch(err){
            console.error(err);
        }
    }

    async updateProductAvailability(productId, quantity) {

        console.log(productId);
        const product = await productsModel.findById(productId);

        // Calculate the new availableCopies value
        const newAvailableQuantity = product.availableQuantity + quantity;

        // Update the availableCopies field and save the product
        product.availableQuantity= newAvailableQuantity;

        await product.save();
        return product;
    }

    async deleteProductById(productId) {
        const deletedProduct = await productsModel.findByIdAndRemove(productId);
        return deletedProduct;
    }
}