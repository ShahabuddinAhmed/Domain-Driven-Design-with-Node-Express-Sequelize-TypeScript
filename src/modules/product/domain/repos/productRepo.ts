import { Repo } from "../../../../core/infra/Repo";
import { ProductInterface } from "../../infra/models/product";


export interface ProductRepoInterface {
    create(product: any): Promise<ProductInterface>;
}