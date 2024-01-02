import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
export class CreateAuthenticateDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
