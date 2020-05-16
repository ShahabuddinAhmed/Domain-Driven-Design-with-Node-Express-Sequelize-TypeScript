import { ProductRepoInterface } from "../../domain/repos/productRepo";
import { UseCase } from "../../../../core/domain/UseCase";
import { Result } from "../../../../core/helper/Result";
import { AddProductUseCaseRequestDTO } from "../../dtos/addProductDTo";
import { Product } from "../../domain/entity/product";
import { DiscountType } from "../../domain/values/discountType";



export class AddProductUseCase implements UseCase<AddProductUseCaseRequestDTO, Result<Product>> {
    private productRepo: ProductRepoInterface;

    constructor(productRepo: ProductRepoInterface) {
        this.productRepo = productRepo;
    }

    private async getProductFromDTO(request: AddProductUseCaseRequestDTO): Promise<Result<Product>> {
        return Product.create({
            id: request.id,
            title: request.title,
            productCode: request.productCode,
            availableProduct: request.availableProduct,
            pricePerProduct: request.pricePerProduct,
            discount: request.discount,
            discountType: DiscountType.create(request.discountType as string).getValue()
        });
    }


    public async execute(request: AddProductUseCaseRequestDTO): Promise<Result<Product>> {
        try {
            const productOrError = await this.getProductFromDTO(request);
            if (productOrError.didFailed) {
                return Result.fail<Product>(productOrError.getError());
            }
            const product = productOrError.getValue();
            
            const createdproduct: any = await this.productRepo.create(product);
            return Result.ok<Product>(createdproduct);
        } catch (err) {
            return Result.fail<Product>(err);
        }
    }
}