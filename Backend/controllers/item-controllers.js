const mongoose = require('mongoose');
const HttpError = require('../models/httpError');

const Item = require('../models/itemSchema');


const getItems = async (req, res, next ) => {
  
    let request = {};
    if (req.query.name) {
      request.name = req.query.name;
    } 
    if (req.query.price) {
      request.price = req.query.price
    }
    let items;
    try {
      items = await Item.find(request);
    } catch(err) {
      const error = new HttpError('Fetching failed, please try again later', 500);
      return next(error);
    }
  
    res.json({items: items.map(item => item.toObject({ getters: true }))});
  };

  const createItem = async( req, res, next ) => {

    const { name, price, size, color, material, image } = req.body;

    const createdItem = new Item({
        name,
        price,
        size,
        color,
        material,
        image,
      });
    
      try {
        
        await createdItem.save();
    
      } catch (err) {
        const error = new HttpError('Creating match failed, try again', 500);
        console.log(err);
        return next(error);
      }
      
      res.status(201).json({item: createdItem});
    };


    const checkPayment = async( req, res, next) => {

      let {id} = req.body;
   
      try {
        item = await Item.findById(id, {"price":1});
        
       } catch (err) {
         const error = new HttpError('Something went wrong, could not find the provided ID', 500);
         console.log(error);
         return next(error);
       }

       if (!item) {
        const error = new HttpError('Could not find an item for the provided id.', 404);
        return next(error);
      }

       res.json({price: item.price});
    };
    

    exports.getItems = getItems;
    exports.createItem = createItem;
    exports.checkPayment = checkPayment;
