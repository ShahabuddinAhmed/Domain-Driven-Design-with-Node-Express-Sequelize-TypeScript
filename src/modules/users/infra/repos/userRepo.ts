import { UserRepoInterface } from "../../domain/repos/userRepo";
import { User } from "../../domain/entity/user";
import { UserMap } from "../../mappers/userMap";
import UserModel from "../models/user";


export interface UserStorageDTO {
    email: string;
    username: string;
    password: string;
    userType: string;
}

export class UserRepo implements UserRepoInterface {

    public async createUser(_user: User): Promise<User | null> {
        const userRepoData = UserMap.toPersistence(_user);
        const user = await UserModel.create(userRepoData);
        if (!user) {
            return null;
        }
        return UserMap.toDomain(user);
    }

    exists(t: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    save(t: User): Promise<User> {
        throw new Error("Method not implemented.");
    }


    public createIndexes(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}

export const newUserRepo = () => {
    return new UserRepo();
};