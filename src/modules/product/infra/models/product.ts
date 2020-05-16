import { Model, DataTypes, } from "sequelize";
import newSequelize from "../../../../infra/db/sequelize";


export interface ProductInterface {
    id: number;
    title: string;
    productCode: string;
    availableProduct: number;
    pricePerProduct: number;
    discount: number;
    discountType: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class Product extends Model implements Product {
    public id: number;
    public title: string;
    public productCode: string;
    public availableProduct: number;
    public pricePerProduct: number;
    public discount: number;
    public discountType: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    productCode: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    availableProduct: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    pricePerProduct: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    discount: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    discountType: {
        type: new DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "product",
    freezeTableName: true,
    timestamps: false,
    underscored: false,
    sequelize: newSequelize(),
    modelName: "product"
});


export default Product;