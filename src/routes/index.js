import express from "express";
import routerCategory from "./category";
import routerProduct from "./product";
import routerAuth from "./auth";
import routerCart from "./cart";

const router = express.Router();

router.use("/categories", routerCategory);
router.use("/products", routerProduct);
router.use("/cart", routerCart);
router.use("/auth", routerAuth);

export default router;
