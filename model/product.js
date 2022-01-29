const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);

// const path = require('path');
// const fs = require('fs');


// const products = [];

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'products.json'
// );       

// const getProductsFromFile = (cb) => {
//     fs.readFile(p, (err, fileContent) =>{
//         if(err) {
//             cb( [] );
//         }
//         cb(JSON.parse(fileContent));
//     });
// }

// module.exports = class Product {
//     constructor(title, imageUrl, price, description) {
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.price = price;
//         this.description = description;
//     }

//     save() {     
//         this.id = Math.random().toString();
//         getProductFromFile(products =>{
//             products.push(this);
//             fs.writeFile(p, JSON.stringify(products), err => {
//                 console.log(err);
//             });
//         });
//     }

//     static fetchAll(cb) {
//         getProductsFromFile(cb);
//     }

//     static findById(id, cb) {
//         getProductsFromFile(products => {
//             const product = products.find(p => p.id === id);
//             cb(product);
//         });
//     }
// };