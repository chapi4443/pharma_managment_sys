const express = require("express");

const router = express.Router();


const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controller/pharmaController");

// const { getSingleProductReviews } = require("../controllers/reviewController");

router
  .route("/")
  .post( createProduct)
  .get(getAllProducts);

router
  .route("/uploadImage")
  .post( uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch( updateProduct)
  .delete( deleteProduct);



module.exports = router;
