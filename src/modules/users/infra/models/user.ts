import { Model, DataTypes } from "sequelize";
import { UserType } from "../../domain/value/userType";
import newSequelize from "../../../../infra/db/sequelize";

class UserModel extends Model {
    public id?: number;
    public email!: string;
    public username!: string;
    public password!: string;
    public userType!: UserType;
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userType: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "user",
    freezeTableName: true,
    timestamps: false,
    underscored: false,
    sequelize: newSequelize(),
    modelName: "user"
});

export default UserModel;