import { Product } from "../../domain/entity/product";
import { AddProductControllerResponseDTO } from "../../dtos/addProductDTo";
import { DiscountType } from "../../domain/values/discountType";

export class AddProductPresenter {
    public static presenter(product: Product | null, message: string | null, error: any): AddProductControllerResponseDTO {
        if (product) {
            return {
                data: {
                    id: product.id,
                    title: product.title,
                    productCode: product.productCode,
                    availableProduct: product.availableProduct,
                    pricePerProduct: product.pricePerProduct,
                    discount: product.discount,
                    discountType: product.discountType,
                    createdAt: product.createdAt,
                    updatedAt: product.updatedAt
                },
                message: message,
                error: error,
            };
        }
        return {
            data: null,
            message: message ? message : error ? error.message ? error.message : null : null,
            error: error,
        };
    }
}