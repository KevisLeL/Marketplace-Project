const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
        name: { type: String, required: true },
        price: { type: Number, required: true },
        size: { type: String || Number, required: true },
        color: { type: String, required: true },
        material: { type: String, required: true},
        image: {type: String}
      });

module.exports = mongoose.model('Item', itemSchema);