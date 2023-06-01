import { Module } from '@nestjs/common';
import { ProductDtoService } from './product-dto.service';
import { ProductDtoController } from './product-dto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { product, productcategory } from 'models';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';

@Module({
  imports : [SequelizeModule.forFeature([product, productcategory]),
    MulterModule.register({
      dest: './uploads/images',
      
    }),],
  controllers: [ProductDtoController],
  providers: [ProductDtoService]
})
export class ProductDtoModule {}
