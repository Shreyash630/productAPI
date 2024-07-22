import productRepository from "./product.repository.js";


export default class productController {
  constructor() {
    this.productRepository = new productRepository();
  }

  createProduct = async (req, res) => {
    const { name, description, price,availableQuantity,} = req.body;
    try {
      const productData = {
        name,
        description,
        price,
        availableQuantity
       
      };
      const savedproduct = await this.productRepository.createProduct(productData);
      res.status(201).json(savedproduct);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to create a new product" });
    }
  };

 
  


  listProductsByGenre = async (req, res) => {
    const { genre } = req.params;

    try {
      const product = await this.productRepository.find({genre});
      if (!product) {
        res.status(404).send("product not found!!");
      } else {
        res.status(200).send(product);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "no product" });
    }
  };

  updateProductAvailability = async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    // console.log(productId + " " + quantity);
    try {
      const updatedproduct = await this.productRepository.updateProductAvailability(
        productId,
        quantity
      );
      if (!updatedproduct) {
        res.status(404).json("product not found!!");
      } else {
        res.status(200).json(updatedproduct);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Could not update quantity" });
    }
  };

  deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
      const deletedproduct = await this.productRepository.deleteProductById(productId);
      if (!deletedproduct) {
        return res.status(404).json({ message: "product not found" });
      }
      return res.status(200).json({ message: "product deleted" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to delete product" });
    }
  };
}
