import { DiscountType } from "../domain/values/discountType";

export interface AddProductUseCaseRequestDTO {
    id: number;
    title: string;
    productCode: string;
    availableProduct: number;
    pricePerProduct: number;
    discount: number;
    discountType: string;
}

export interface  AddProductControllerResponseDTO {
    data: {
        id: number;
        title: string;
        productCode: string;
        availableProduct: number;
        pricePerProduct: number;
        discount: number;
        discountType: DiscountType;
        createdAt: Date | string;
        updatedAt: Date | string;
    } | null;
    message: string | null;
    error: any;
}