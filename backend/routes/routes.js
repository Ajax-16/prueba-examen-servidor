import { Router } from "express";
import { deleteProduct, getAllProducts, getAllProductsByCategory, getOneProduct, postProduct, updateProduct } from "../controller/product.controller.js";
import { deleteCategory, getAllCategories, getOneCategory, postCategory, updateCategory } from "../controller/category.controller.js";

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', postProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);
router.get('/products/category/:id', getAllProductsByCategory);

router.get('/categories', getAllCategories);
router.get('/categories/:id', getOneCategory);
router.post('/categories', postCategory);
router.delete('/categories/:id', deleteCategory);
router.put('/categories/:id', updateCategory);

export default router;