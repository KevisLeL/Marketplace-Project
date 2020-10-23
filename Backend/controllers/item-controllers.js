const mongoose = require('mongoose');
const HttpError = require('../models/httpError');

const Item = require('../models/itemSchema');


const getItems = async (req, res, next) => {
  let request = {};
  if (req.query.name) {
    request.name = req.query.name;
  }
  if (req.query.price) {
    request.price = req.query.price;
  }
  let items;
  try {
    items = await Item.find(request);
  } catch (err) {
    const error = new HttpError("Fetching failed, please try again later", 500);
    return next(error);
  }

  res.json({ items: items.map((item) => item.toObject({ getters: true })) });
};

const createItem = async (req, res, next) => {
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
    const error = new HttpError("Creating match failed, try again", 500);
    console.log(err);
    return next(error);
  }

  res.status(201).json({ item: createdItem });
};

const checkPayment = async (req, res, next) => {
  
  console.log(req.body);
  const totalPrice = req.body.totalPrice;
  const items = req.body.items;

  let price = 0;

  try {
    for ( i = 0; i < items.length; i++) {
      const item = await Item.findById(items[i].id);
      price += (item.price * items[i].amount);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find the provided ID",
      500
    );
    console.log(error);
    return next(error);
  }

  if ( price !== totalPrice) {
    const error = new HttpError(
      "Something went wrong, invalid real price. Price should be " + price,
      500);
      return next(error);
  } else {

    res.status(200).send('Thanks for purchasing on KiviZon');
  }
};

exports.getItems = getItems;
exports.createItem = createItem;
exports.checkPayment = checkPayment;
