import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import UserModel from "../../users/infra/models/user";
import { User } from "../domain/entity/user";
import { UserStorageDTO } from "../infra/repos/userRepo";

export class UserMap {
    public static toDomain(raw: UserModel): User | null {
        const createUserOrError = User.create({
            email: raw.email,
            username: raw.username,
            password: raw.password,
            userType: raw.userType
        }, new UniqueEntityID(raw.id));

        return createUserOrError.didSucceed ? createUserOrError.getValue() : null;
    }

    public static toPersistence(user: User): UserStorageDTO {
        return {
            email: user.email,
            username: user.username,
            password: user.password,
            userType: user.userType.value
        };
    }

}