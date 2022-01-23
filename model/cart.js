const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);       

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p,(err, fileContent) =>{
            let cart = { products: [], totalPrice: 0};
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProduct = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if(existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            cart.totalPrice = cart.totalPrice + productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        });
    }
};