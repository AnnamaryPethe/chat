export class UserRegisterDTO {
    readonly data: {
        readonly firstName: string;
        readonly lastName: string;
        readonly nickname: string;
        readonly email: string;
        readonly password: string;
        readonly  created: Date;
    }
}