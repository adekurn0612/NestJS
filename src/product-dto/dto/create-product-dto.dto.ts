import { IsNotEmpty, IsString, IsInt , IsNumber } from "class-validator";
import { IsNumeric } from "sequelize-typescript";
import { isNumber } from "util";



export class CreateProductDtoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    description: string;
  
    image: any;
  
    @IsNotEmpty()
    @IsString()
    price: string;
  
    @IsNotEmpty()
    @IsString() //@IsNumber
    categoryid: number;
  
      
      


}
