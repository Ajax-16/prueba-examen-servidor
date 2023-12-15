import { getProductsFromDB, getOneProductFromDB, createProductFromDB, deleteProductFromDB, updateProductFromDB, getProductsByCategoryFromDB } from "../services/product.service.js"

export const getAllProducts =  async (req, res) => {
    try{
        const products = await getProductsFromDB();
        res.send(products);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

export const getOneProduct =  async (req, res) => {
    try{
        const {id} = req.params;
        const products = await getOneProductFromDB(id);
        res.send(products);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

export const getAllProductsByCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const products = await getProductsByCategoryFromDB(id);
        res.send(products);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

export const postProduct = async (req, res) => {
    try{
        const {body} = req;
        const result = await createProductFromDB(body);
        res.send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await deleteProductFromDB(id);
        res.send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);  
    }
}

export const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const {body} = req;
        
        const result = await updateProductFromDB(id, body);
        res.send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}