// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({//กำหนดSchema
    product_name: { type: String, required: true },//ถ้าข้อมูลไม่ครบไม่ส่ง แต่ถ้าfalse ส่งข้อมูลไม่ครบก็ได้
    product_type: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    },
    {timestamps:true,versionKey:false}//versionKey ขีดๆของวันที่ ไม่จำเป็นเลยใส่false
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product