import { PartialType } from '@nestjs/mapped-types';
import { CreateUsercsdtoDto } from './create-usercsdto.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUsercsdtoDto extends PartialType(CreateUsercsdtoDto) {
    @IsNotEmpty()
    user_name: string;
  
    @IsNotEmpty()
    password: string;
  
  
    @IsNotEmpty()
    firstname: any;
  
    @IsNotEmpty()
    lastname: any;

    // @IsNotEmpty()
    // userid: number;
    // @IsNotEmpty()
    // id: number;

}
