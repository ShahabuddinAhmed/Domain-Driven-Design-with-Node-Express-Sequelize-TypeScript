import { User } from "../../domain/entity/user";
import { UserType } from "../../domain/value/userType";

import { UserRepoInterface } from "../../domain/repos/userRepo";

import { UseCase } from "../../../../shared/core/UseCase";
import { Result } from "../../../../shared/core/Result";
import { CreateUserUseCaseRequestDTO } from "./createUserDTO";


export class CreateUserUseCase implements UseCase<CreateUserUseCaseRequestDTO, Result<User>> {
    private userRepo: UserRepoInterface;

    constructor(userRepo: UserRepoInterface) {
        this.userRepo = userRepo;
    }

    private async getUserFromDTO(request: CreateUserUseCaseRequestDTO): Promise<Result<User>> {
        return User.create({
            email: request.email,
            username: request.username,
            password: request.password,
            userType: UserType.create(request.userType).getValue()
        });
    }

    public async execute(request: CreateUserUseCaseRequestDTO): Promise<Result<User>> {
        try {
            const userOrError = await this.getUserFromDTO(request);
            if (userOrError.didFailed) {
                return Result.fail<User>(userOrError.getError());
            }
            const user = userOrError.getValue();
            
            const createUser = await this.userRepo.createUser(user);
            if(!createUser) {
                return Result.fail<User>("User Create is failed");
            }
            return Result.ok<User>(createUser);
        } catch (err) {
            console.log(err);
            return Result.fail<User>(err);
        }
    }
}