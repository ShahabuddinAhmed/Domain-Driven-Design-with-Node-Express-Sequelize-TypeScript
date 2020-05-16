import { AddProductUseCase } from "../../application/useCases/addProductUseCase";
import { AddProductController } from "./productController";

export const newProductController = (useCase: AddProductUseCase): AddProductController => {
    return new AddProductController(useCase);
};