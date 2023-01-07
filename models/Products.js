'use strict';

const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    name: String,
    forSale: Boolean,
    price: Number,
    picture: String,
    tags: [String]
});

productsSchema.statics.list = function(filter, skip, limit, fields, sort) {
    const query = Products.find(filter); 
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec() 
  }

// create model
const Products = mongoose.model('Product', productsSchema);

// export model
module.exports = Products;