import { ProductRepoInterface } from "../../domain/repos/productRepo";
import Product, { ProductInterface } from "../../infra/models/product";


export class ProductRepo implements ProductRepoInterface {
    public async create(product: ProductInterface): Promise<ProductInterface> {
        return Product.create(product);
    }
}