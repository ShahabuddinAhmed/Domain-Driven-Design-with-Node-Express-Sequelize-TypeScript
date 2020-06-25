import { User } from "../../domain/entity/user";
import { CreateUserControllerResponseDTO } from "./createUserDTO";

export class CreateUserSerializer {
    public static serialize(user: User | null, message: string | null, error: any): CreateUserControllerResponseDTO {
        if (user) {
            return {
                data: {
                    email: user.email,
                    username: user.username,
                    password: user.password,
                    userType: user.userType.value,
                },
                message: message,
                error: error,
            };
        }
        return {
            data: null,
            message: message ? message : error ? error.message ? error.message : null : null,
            error: error,
        };
    }
}