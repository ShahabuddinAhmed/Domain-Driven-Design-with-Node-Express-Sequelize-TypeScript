import { Entity } from "../../../../core/domain/Entity";
import { Result } from "../../../../core/helper/Result";
import { DiscountType } from "../values/discountType";

 interface ProductProps {
    id: number;
    title: string;
    productCode: string;
    availableProduct: number;
    pricePerProduct: number;
    discount: number;
    discountType: DiscountType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export class Product extends Entity<ProductProps> {
    private constructor(props: ProductProps) {
        super(props);
    }

    get id(): number {
        return this.props.id;
    }

    get title(): string {
        return this.props.title;
    }

    get productCode(): string {
        return this.props.productCode;
    }

    get availableProduct(): number {
        return this.props.availableProduct;
    }

    get pricePerProduct(): number {
        return this.props.pricePerProduct;
    }

    get discount(): number {
        return this.props.discount;
    }

    get discountType(): DiscountType {
        return this.props.discountType;
    }

    get createdAt(): Date | string | undefined {
        return this.props.createdAt;
    }

    get updatedAt(): Date | string | undefined {
        return this.props.updatedAt;
    }

    public static create(props: ProductProps): Result<Product> {
        return Result.ok<Product>(new Product(props));
    }
}