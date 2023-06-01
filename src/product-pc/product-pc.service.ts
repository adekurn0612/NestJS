import { Injectable } from '@nestjs/common';
import { CreateProductPcDto } from './dto/create-product-pc.dto';
import { UpdateProductPcDto } from './dto/update-product-pc.dto';
import { Sequelize } from 'sequelize-typescript';
import { product, productcategory } from 'models';

@Injectable()
export class ProductPcService {
  constructor(private sequelize : Sequelize) {
    
  }
  create(createProductPcDto: CreateProductPcDto) {
    return 'This action adds a new productPc';
  }

  async findAll() {
    try {
      const data = await product.findAll({
        include:[{
          model: productcategory,
          as : 'productcategory',
        }]
      })
      return data
    } catch (err) {
      return err.message
      
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} productPc`;
  }

  update(id: number, updateProductPcDto: UpdateProductPcDto) {
    return `This action updates a #${id} productPc`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPc`;
  }

  async findAllSP(){
    try {
      const data = `select product.product_id,
      product.name,
      product.description,
      product.price,
      product.image, 
      productcategory.name as categoryName, 
      productcategory.description as categoryDescription
      from product
      join productcategory on product.categoryid=productcategory.id`;
      const result = await this.sequelize.query(data);
      return result
    } catch (error) {
      return error.message
    }
        }

}
