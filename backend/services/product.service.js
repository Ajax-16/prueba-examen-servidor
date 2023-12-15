import { conn } from "../db/mysql.js"

export const getProductsFromDB = async () => {

    const sql = `SELECT products.name, products.description, products.price, categories.name as category
                 FROM products LEFT JOIN categories
                 ON categories.id = products.category_id
                 ORDER BY products.category_id ASC`;
    const result = await conn.query(sql);
    return { result: result[0] };

}

export const getOneProductFromDB = async (id) => {

    const sql = "SELECT * FROM products WHERE id = ?";
    const result = await conn.query(sql, [id]);

    if (result[0].length === 0) {
        return { result: 'element not found!' };
    }
    return { result: result[0][0] };

}

export const createProductFromDB = async (product) => {

    const { name, description, price, category_id } = product;
    const sql = "INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)";
    const result = await conn.query(sql, [name, description, price, category_id]);
    console.log(result[0])
    if(result[0].affectedRows === 0) {
        return {result: 'element not created'};
    }
    return { result: 'ok!' };

}

export const deleteProductFromDB = async (id) => {

    const sql = "DELETE FROM products WHERE id = ?";
    const result = await conn.query(sql, [id]);
    if (result[0].affectedRows === 0) {
        return { result: 'element not deleted!' };
    }
    return { result: 'ok!' };

}

export const updateProductFromDB = async (id, product) => {

    const {name, description, price, category_id } = product;
    const sql = "UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?";
    const result = await conn.query(sql, [name, description, price, category_id, id]);
    if(result[0].affectedRows === 0) {
        return { result: 'element not updated!' };
    }
    return { result: 'ok!' };

}

export const getProductsByCategoryFromDB = async (categoryId) => {
    
    const sql = "SELECT * FROM products WHERE category_id = ?";
    const result = await conn.query(sql, [categoryId]);
    if(result[0].length === 0) {
        return { result: 'element not found!' };
    }
    return { result: result[0] };

}