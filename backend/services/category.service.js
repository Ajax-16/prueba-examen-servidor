import { conn } from "../db/mysql.js"

export const getCategoriesFromDB = async () => {

    const sql = "SELECT * FROM categories";
    const result = await conn.query(sql);
    return { result: result[0] };

}

export const getOneCategoryFromDB = async (id) => {

    const sql = "SELECT * FROM categories WHERE id = ?";
    const result = await conn.query(sql, [id]);

    if (result[0].length === 0) {
        return { result: 'element not found!' };
    }
    return { result: result[0][0] };

}

export const createCategoryFromDB = async (category) => {

    const { name, description } = category;
    const sql = "INSERT INTO categories (name, description) VALUES (?, ?)";
    const result = await conn.query(sql, [name, description]);
    if(result[0].affectedRows === 0) {
        return {result: 'element not created'};
    }
    return { result: 'ok!' };

}

export const deleteCategoryFromDB = async (id) => {

    const sql = "DELETE FROM categories WHERE id = ?";
    const result = await conn.query(sql, [id]);
    if (result[0].affectedRows === 0) {
        return { result: 'element not deleted!' };
    }
    return { result: 'ok!' };

}

export const updateCategoryFromDB = async (id, category) => {

    const {name, description } = category;
    const sql = "UPDATE products SET name = ?, description = ? WHERE id = ?";
    const result = await conn.query(sql, [name, description, id]);
    if(result[0].affectedRows === 0) {
        return { result: 'element not updated!' };
    }
    return { result: 'ok!' };

}