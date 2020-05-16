import express from "express";
import { AddProductController } from "../../../delivery/controller/productController";


export const newProductRouter = (
    addProductController: AddProductController
) => {
    const productRouter = express.Router();

    productRouter.post("/add-product",
        (req, res) => addProductController.execute(req, res)
    );
    return productRouter;
};

