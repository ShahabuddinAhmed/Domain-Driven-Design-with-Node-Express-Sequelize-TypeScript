import { AddProductUseCase } from "./addProductUseCase";
import { ProductRepoInterface } from "../../domain/repos/productRepo";

export const newProductUseCase = (useCase: ProductRepoInterface): any => {
    return new AddProductUseCase(useCase);
};