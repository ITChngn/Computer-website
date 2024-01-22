const express = require("express");
const {
  createCategory,
  getCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/category");

const {
  createProduct,
  getProduct,
  getOneProduct,
  getProductList,
  updateProduct,
  deleteProduct,
} = require("../controller/product");
const {
  register,
  login,
  checkAuth,
  getOneUser,
  getAllUsers,
} = require("../controller/user");
const {
  createWishList,
  deleteWishList,
  getWishList,
} = require("../controller/wishList");
const { protect } = require("../middleware/protect");

const router = express.Router();

//USER ROUTES
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/checkAuth").post(checkAuth);
router.route("/getOneUser").post(protect, getOneUser); // protected
router.route("/getAllUsers").get(protect, getAllUsers); // protected

//CATEGORY ROUTES
router.route("/getCategories").get(getCategories);
router.route("/getOneCategory").get(getOneCategory);
router.route("/createCategory").post(protect, createCategory); // protected
router.route("/updateCategory").post(protect, updateCategory); // protected
router.route("/deleteCategory").post(protect, deleteCategory); // protected

//PRODUCT ROUTES
router.route("/getProductList").get(getProductList);
router.route("/getOneProduct").get(getOneProduct);
router.route("/createProduct").post(protect, createProduct); // protected
router.route("/updateProduct").post(protect, updateProduct); // protected
router.route("/deleteProduct").post(protect, deleteProduct); // protected

//WISHLIST
router.route("/getWishList").post(protect, getWishList);
router.route("/createWishList").post(protect, createWishList);
router.route("/deleteWishList").post(protect, deleteWishList);

module.exports = router;
