import { Module } from '@nestjs/common';
import { ProductPcService } from './product-pc.service';
import { ProductPcController } from './product-pc.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { product } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([product])],
  controllers: [ProductPcController],
  providers: [ProductPcService]
})
export class ProductPcModule {}
