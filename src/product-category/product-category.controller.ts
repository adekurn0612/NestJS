import { Controller , Post , Body } from '@nestjs/common';
import { productcategory } from 'models';
import { ProductCategoryService } from './product-category.service';

@Controller('product-category')
export class ProductCategoryController {
    constructor(private readonly  ProductCategoryService:ProductCategoryService){
    }

    @Post()
    async insertProductCategory(@Body() fields : productcategory){
        return this.ProductCategoryService.productCategoryCreate(fields);
    }
}
