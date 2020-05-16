import { BaseController } from "../../../../core/infra/BaseController";
import { AddProductUseCase } from "../../application/useCases/addProductUseCase";
import { Request, Response } from "express";
import { AddProductUseCaseRequestDTO } from "../../dtos/addProductDTo";
import { object, string, number, ValidationError, date } from "@hapi/joi";
import { Type } from "../../domain/values/discountType";
import { AddProductPresenter } from "../presenter/addProductPresenter";


export class AddProductController extends BaseController {
    private useCase: AddProductUseCase;

    public constructor(useCase: AddProductUseCase) {
        super();
        this.useCase = useCase;
    }

    public async validateReq(req: Request): Promise<{ value: AddProductUseCaseRequestDTO; error?: ValidationError }> {
        const schema = object().keys({
            id: number().required(),
            title: string().required(),
            productCode: string().required(),
            availableProduct: number().required(),
            pricePerProduct: number().required(),
            discount: number().required(),
            discountType: string().valid(Type.AMOUNT, Type.PERCENTAGE).required(),
        });

        return schema.validate(req.body, { abortEarly: false, });
    }

    public async executeImpl(req: Request, res: Response): Promise<any> {
        try {
            const { error, value } = await this.validateReq(req);
            if (error) {
                return this.clientError(res, AddProductPresenter.presenter(null, "Validation Failed", error));
            }

            const dto: AddProductUseCaseRequestDTO = {
                id: value.id,
                title: value.title,
                productCode: value.productCode,
                availableProduct: value.availableProduct,
                pricePerProduct: value.pricePerProduct,
                discount: value.discount,
                discountType: value.discountType
            };
            const userRewardOrError = await this.useCase.execute(dto);
            if (userRewardOrError.didFailed) {
                return this.clientError(res, AddProductPresenter.presenter(null, null, userRewardOrError.getError()));
            }


            this.ok(res, AddProductPresenter.presenter(userRewardOrError.getValue(), "Product added successfully", null));
        } catch (err) {
            this.fail(res, "Sorry Shit happened");
        }

    }
}