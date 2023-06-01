import { IsNotEmpty, IsString } from "class-validator";

export class CreateLoginOdtDto {

@IsNotEmpty()
@IsString()
user_name : string;

@IsNotEmpty()
@IsString()
password : string;
}
