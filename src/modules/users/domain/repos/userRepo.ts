import { Repo } from "../../../../shared/infra/Repo";
import { User } from "../entity/user";


export interface UserRepoInterface extends Repo<User> {
    createUser(user: User): Promise<User | null>;
}