import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderOdService } from './order-od.service';
import { CreateOrderOdDto } from './dto/create-order-od.dto';
import { UpdateOrderOdDto } from './dto/update-order-od.dto';

@Controller('order-od')
export class OrderOdController {
  constructor(private readonly orderOdService: OrderOdService) {}

  @Post()
  create(@Body() createOrderOdDto: CreateOrderOdDto) {
    return this.orderOdService.create(createOrderOdDto);
  }

  @Get("all-include")
  findAll() {
    return this.orderOdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderOdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderOdDto: UpdateOrderOdDto) {
    return this.orderOdService.update(+id, updateOrderOdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderOdService.remove(+id);
  }
}
