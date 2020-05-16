import { Result } from "../../../../core/helper/Result";
import { ValueObject } from "../../../../core/domain/ValueObject";

interface DiscountTypeProps {
    type: string;
}

export enum Type {
    AMOUNT = "Amount",
    PERCENTAGE = "Percentage"
}

export class DiscountType extends ValueObject<DiscountTypeProps> {
    get value(): string {
        return this.props.type;
    }

    get isAmount(): boolean {
        return this.props.type === Type.AMOUNT;
    }

    get isPercentage(): boolean {
        return this.props.type === Type.PERCENTAGE;
    }

    private constructor(props: DiscountTypeProps) {
        super(props);
    }

    public static create(type: string): Result<DiscountType> {
        if (type !== Type.AMOUNT && type !== Type.PERCENTAGE) {
            return Result.fail<DiscountType>("Must provide an valid Discount Type");
        }
        return Result.ok<DiscountType>(new DiscountType({ type: type }));
    }
}