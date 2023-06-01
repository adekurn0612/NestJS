import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderOdDto } from './create-order-od.dto';

export class UpdateOrderOdDto extends PartialType(CreateOrderOdDto) {}
