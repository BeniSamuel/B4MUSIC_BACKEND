import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDataDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
