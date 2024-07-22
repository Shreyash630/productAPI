// No need to change pre-written code
// Just make changes in reviews
import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
 
    name: {
         type: String, 
         required: true, 
        },
  description: { type: String, required: true },
  price: { type: Number, required: true },

    availableQuantity: {
        type: Number,
        required: true,
        min: 0,
    },
  
    
});