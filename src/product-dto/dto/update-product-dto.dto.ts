import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDtoDto } from './create-product-dto.dto';
import { IsNotEmpty, IsString, IsInt , IsNumber } from "class-validator";

export class UpdateProductDtoDto extends PartialType(CreateProductDtoDto) {
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
    @IsString()
    categoryid: number;
  
}
