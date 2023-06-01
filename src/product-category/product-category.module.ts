import { Module } from '@nestjs/common';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategoryService } from './product-category.service';
import { productcategory } from 'models';
import { SequelizeModule } from '@nestjs/sequelize/dist';

@Module({
    imports : [SequelizeModule.forFeature([productcategory])],
    controllers: [ProductCategoryController],
    providers: [ProductCategoryService],
})
export class ProductCategoryModule {
}
