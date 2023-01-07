'use strict';

const express = require('express');
const createError = require('http-errors');
const Products = require('../../models/Products');

const router = express.Router();


// GET /api/products 
router.get('/', async (req, res, next) => {
    try {
      //filters 
      const name = req.query.name;
      const forSale = req.query.forSale;
      const price = req.query.price;
      const picture = req.query.picture;
      const tags = req.query.tags;

      // pages
      const skip = req.query.skip;
      const limit = req.query.limit;

      // field selection 
      const fields = req.query.fields; // MIRAR /api/agentes?fields=name -_id
      
      // sort 
      const sort = req.query.sort; // MIRAR /api/agentes?sort=age%20name
  
      // Define filter for name
      const filter = {};
      if (name) { 
        filter.name = new RegExp('^' + name, "i");
      }

      // Define filter forSale
      if (forSale) {
        filter.forSale = forSale;
    }
    
      // Define filter for price
      if( typeof(price) !== 'undefined' ) {
        let priceArray = price.split('-');
        priceArray = priceArray.map(parseFloat);

        if( priceArray.length == 1 ) {
            filter.price = priceArray[0];
        } else if( !isNaN(priceArray[0]) && !isNaN(priceArray[1]) ) {
            filter.price = {$gte: priceArray[0], $lte: priceArray[1]};
        } else if( !isNaN(priceArray[0]) ) {
            filter.price = {$gte: priceArray[0]};
        } else if( !isNaN(priceArray[1]) ) {
            filter.price = {$lte: priceArray[1]};
        } 
      }

      // Define filter for tags 
      if ( typeof(tags) !== 'undefined' ) {
        
        // Convert tags string into array
        filter.tags = {$in: tags.split(/,|\s/)};
      }
      
      //Get the products
      const products = await Products.list(filter, skip, limit, fields, sort);
      res.json({ results: products }); 

    } catch(err) {
      next(err);
    }
  });

  // Get the tags
  router.get('/tags', async (req, res, next) => {
    try {
      const alreadyTags = await Products.listTags();
      res.json({tags: alreadyTags });
  
    } catch (err) {
      next(err);
    }
  });  




//ROUTER.POST NEW PRODUCT
router.post('/', async (req, res, next) => {
    try {
        const newProduct = req.body;
            
        const product = new Products(newProduct);
        
        const savedProduct = await product.save();
    
        res.json({ result: savedProduct });
  
    } catch (err) {
      next(err);
    }
  });


module.exports = router;