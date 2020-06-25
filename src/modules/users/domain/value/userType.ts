import { Result } from "../../../../shared/core/Result";
import { ValueObject } from "../../../../shared/domain/ValueObject";

interface UserTypeProps {
    type: string;
}

export enum Type {
    GENERALUSER = "GeneralUser",
    ADMIN = "Admin",
}

export class UserType extends ValueObject<UserTypeProps> {
    get value(): string {
        return this.props.type;
    }

    get isGeneralUser(): boolean {
        return this.props.type === Type.GENERALUSER;
    }

    get isAdmin(): boolean {
        return this.props.type === Type.ADMIN;
    }

    private constructor(props: UserTypeProps) {
        super(props);
    }

    public static create(type: string): Result<UserType> {
        if (type !== Type.GENERALUSER && type !== Type.ADMIN) {
            return Result.fail<UserType>("Must provide an valid User Type");
        }
        return Result.ok<UserType>(new UserType({ type: type }));
    }
}