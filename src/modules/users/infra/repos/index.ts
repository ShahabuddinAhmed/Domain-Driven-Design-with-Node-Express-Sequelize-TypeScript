import { UserRepo } from "./userRepo";

export const newUserRepo = (): UserRepo => {
    return new UserRepo();
};