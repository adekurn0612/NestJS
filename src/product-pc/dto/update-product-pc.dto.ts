import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPcDto } from './create-product-pc.dto';

export class UpdateProductPcDto extends PartialType(CreateProductPcDto) {}
