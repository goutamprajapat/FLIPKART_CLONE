const SellerProduct = require("../Controller/Seller.Product.Controller");
const ProductValidation = require("../Middleware/Product.MiddleWare");
const { upload } = require("../Middleware/image.upload");
const SellerProductRoutes = require("express").Router();

SellerProductRoutes.route("/add-product").post(
  ProductValidation.ValidUser,
  upload.fields([
    { name: "brandLogo", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),

  ProductValidation.addProductValid,
  SellerProduct.addNewProduct
);
SellerProductRoutes.route("/products").get(
  ProductValidation.ValidUser,
  SellerProduct.getAllproducts
);
SellerProductRoutes.route("/getDashbordDetails").get(
  ProductValidation.ValidUser,
  SellerProduct.getDashBoardDetails
);
SellerProductRoutes.route("/products/:id")
  .get(ProductValidation.ValidUser, SellerProduct.getProduct)
  .put(ProductValidation.ValidUser, SellerProduct.updateProduct)
  .delete(ProductValidation.ValidUser, SellerProduct.deleteProduct);

SellerProductRoutes.route("/brandlogo/:id").put(
  upload.single("brandLogo"),
  ProductValidation.ValidUser,
  SellerProduct.updateBrandLogo
);
SellerProductRoutes.route("/thumbnail/:id").put(
  upload.single("thumbnail"),
  ProductValidation.ValidUser,
  SellerProduct.updateThumbnail
);
SellerProductRoutes.route("/updateImage/:id").put(
  upload.array("images"),
  ProductValidation.ValidUser,
  SellerProduct.updateImage
);
module.exports = SellerProductRoutes;
