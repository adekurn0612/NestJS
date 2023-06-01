import { Module } from '@nestjs/common';
import { OrderOdService } from './order-od.service';
import { OrderOdController } from './order-od.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { orderdetail, orders } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([orders, orderdetail])],
  controllers: [OrderOdController],
  providers: [OrderOdService]
})
export class OrderOdModule {}
