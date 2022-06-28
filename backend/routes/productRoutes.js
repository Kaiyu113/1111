const express = require("express");
const multer = require("multer");
const router = express.Router();

const {
  productAdd,
  getProducts,
  addToCart,
  getCart,
  deleteCart,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");

router.get("/getproducts", getProducts);
router.route("/addproduct").post(protect, productAdd);

router.route("/addtocart").post(protect, addToCart);
router.route("/getcart").get(protect, getCart);

//=================================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/uploadImage", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.route("/:id'").delete(protect, deleteCart);
//===========================
module.exports = router;
