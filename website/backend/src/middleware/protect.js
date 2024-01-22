const jwt = require("jsonwebtoken");

module.exports.protect = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.slice("Bearer ".length) || "";
    const tokenobj = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = tokenobj.id;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Нэвтрээгүй байна." });
    next(err);
  }
};
