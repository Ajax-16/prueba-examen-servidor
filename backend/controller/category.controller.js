import { createCategoryFromDB, deleteCategoryFromDB, getCategoriesFromDB, getOneCategoryFromDB, updateCategoryFromDB } from "../services/category.service.js";

export const getAllCategories =  async (req, res) => {
    try{
        const categories = await getCategoriesFromDB()
        res.send(categories);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

export const getOneCategory =  async (req, res) => {
    try{
        const {id} = req.params;
        const category = await getOneCategoryFromDB(id);
        res.send(category);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

export const postCategory = async (req, res) => {
    try{
        const {body} = req;
        const result = await createCategoryFromDB(body);
        res.send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}

export const deleteCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await deleteCategoryFromDB(id);
        res.send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);  
    }
}

export const updateCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const {body} = req;
        
        const result = await updateCategoryFromDB(id, body);
        res.send(result);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}