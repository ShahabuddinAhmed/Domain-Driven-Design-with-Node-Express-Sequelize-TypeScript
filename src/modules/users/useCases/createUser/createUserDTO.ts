export interface CreateUserUseCaseRequestDTO {
    email: string;
    username: string;
    password: string;
    userType: string;
}


export interface CreateUserControllerResponseDTO {
    data: {
        email: string;
        username: string;
        password: string;
        userType: string;
    } | null;
    message: string | null;
    error: any;
}