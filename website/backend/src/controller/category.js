const Category = require("../model/Category");

// GET ALL CATEGORIES
module.exports.getCategories = async (req, res, next) => {
  try {
    let existCategories = [];
    if (req.query.parentCategory) {
      existCategories = await Category.find({
        parentCategory: req.query.parentCategory,
      }).populate("childCategories");
    } else {
      existCategories = await Category.find({
        parentCategory: undefined,
      }).populate("childCategories");
    }
    res.status(200).json({
      success: true,
      data: existCategories,
    });
  } catch (err) {
    next(err);
  }
};

// CREATE
module.exports.createCategory = async (req, res, next) => {
  const category = req.body;
  try {
    const existParentCategory = await Category.findById(
      category.parentCategory
    );
    if (category.parentCategory) {
      if (!existParentCategory) {
        throw new Error("Not found parent category.");
      }
    }

    const newCategory = await Category.create(
      Object.assign(category, {
        parentCategory: existParentCategory,
      })
    );

    if (existParentCategory) {
      await existParentCategory.childCategories.push(newCategory);
      await existParentCategory.save();
    }

    res.status(200).json({
      success: true,
      data: newCategory,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getOneCategory = async (req, res, next) => {
  let query = req.body;
  try {
    const existData = await Category.findOne(query);
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateCategory = async (req, res, next) => {
  try {
    const existData = await Category.findOneAndUpdate(
      { _id: req.body._id },
      { name: req.body.name }
    );
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteCategory = async (req, res, next) => {
  try {
    const existData = await Category.findOneAndDelete({ _id: req.body._id });
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};
