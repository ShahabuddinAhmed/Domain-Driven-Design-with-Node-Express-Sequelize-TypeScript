import { UserType } from "../value/userType";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { Result } from "../../../../shared/core/Result";
import { Entity } from "../../../../shared/domain/Entity";

interface UserProps {
    email: string;
    username: string;
    password: string;
    userType: UserType;
}

export class User extends Entity<UserProps> {
    private constructor (props: UserProps, id?: UniqueEntityID) {
        super(props, id);
    }

    get email(): string {
        return this.props.email;
    }

    get username(): string {
        return this.props.username;
    }

    get password(): string {
        return this.props.password;
    }

    get userType(): UserType {
        return this.props.userType;
    }

    public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
        return Result.ok<User>(new User(props, id));
    }
}