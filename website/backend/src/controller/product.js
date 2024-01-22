const Product = require("../model/Product");

module.exports.getProductList = async (req, res, next) => {
  try {
    let existData = [];
    if (req.query.cateogryId)
      existData = await Product.find({ category: req.query.cateogryId });
    else {
      existData = await Product.find({});
    }

    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getOneProduct = async (req, res, next) => {
  let query = req.body;
  try {
    const existData = await Product.findOne(query).populate("category");
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.createProduct = async (req, res, next) => {
  const product = req.body.data;
  try {
    const newProduct = await Product.create(product);
    res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateProduct = async (req, res, next) => {
  try {
    const existData = await Product.findById(req.body.data._id);
    if (!existData) throw Error("Not found product.");
    await existData.updateOne(req.body.data);
    res.status(200).json({
      success: true,
      data: req.body.data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  console.log(req.body._id);
  try {
    const existData = await Product.findOneAndDelete({ _id: req.body._id });
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};
