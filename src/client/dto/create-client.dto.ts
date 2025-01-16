import { IsDateString, IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateClientDto {

    @IsString()
    name:string;

    @IsString()
    cpf:string;

    @IsEmail()
    email: string;

    @IsDateString()
    dateofBirth: string;

    @IsString()
    login: string;

    @IsString()
    password:string;
}
