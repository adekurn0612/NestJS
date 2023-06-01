import { Injectable } from '@nestjs/common';
import { productcategory } from 'models';

@Injectable()
export class ProductCategoryService {
    async productCategoryCreate(fields: productcategory): Promise<productcategory[]> {
        try {
          const result = await productcategory.create({
            name: fields.name,
            description: fields.description,
          });
          return [result];
        } catch (e) {
          return e.message
        }
      }
      
}
