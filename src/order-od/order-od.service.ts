import { Injectable } from '@nestjs/common';
import { CreateOrderOdDto } from './dto/create-order-od.dto';
import { UpdateOrderOdDto } from './dto/update-order-od.dto';
import { orderdetail, orders } from 'models';

@Injectable()
export class OrderOdService {
  create(createOrderOdDto: CreateOrderOdDto) {
    return 'This action adds a new orderOd';
  }

  async findAll() {
    try {
      const data = await orders.findAll({
        include:[{
          model: orderdetail,
          as : 'orderdetails',
        }]
      })
      return data
    } catch (err) {
      return err.message
      
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} orderOd`;
  }

  update(id: number, updateOrderOdDto: UpdateOrderOdDto) {
    return `This action updates a #${id} orderOd`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderOd`;
  }
}
