const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: [true, "please provide a description"],
      maxlength: [1000, "description cannot be empty"],
    },
    image: {
      type: String,
      default: "/uploads/example.jpeg",
    },
    category: {
      type: String,
      required: [true, "please provide product category"],
    },

    address: {
      type: String,
      required: true,
    },

    available_rooms: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);

// const mongoose = require('mongoose');

// const hotelSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   address: {
//     type: String,
//     required: true
//   },
//   services: [{
//     name: {
//       type: String,
//       required: true
//     },
//     description: {
//       type: String,
//       required: true
//     }
//   }]
// });

// module.exports = mongoose.model('Hotel', hotelSchema);

// const hotelSchema = new mongoose.Schema({
//     hotel_id: { type: Number, required: true, unique: true },
//     hotel_name: { type: String,
//          required:  true },
//     location: { type: String },
//     room_type: { type: String },
//     price_per_night_per: { type: String },
//     available_rooms: { type: Number },
//     services: [{
//         name: {
//           type: String,
//           required: true
//         },
//         description: {
//           type: String,
//           required: true
//         }
//       }]
//   },{timestamps:true},
//   {
//       collation:"hotel"
//   }
//   )
//   const hotel =mongoose.model("hotel",hotelSchema);
//   module.exports =hotel;
