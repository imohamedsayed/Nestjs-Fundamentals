import { IsEmail, IsNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3)
  readonly name: string;
  @IsEmail({}, { message: 'Invalid Email Address ' })
  readonly email: string;
  @IsNumber()
  readonly age: number;
  @IsString()
  readonly country: string;
}
