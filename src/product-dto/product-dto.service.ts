import { BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateProductDtoDto } from './dto/create-product-dto.dto';
import { UpdateProductDtoDto } from './dto/update-product-dto.dto';
import * as multer from 'multer';
import { InjectModel } from '@nestjs/sequelize';
import { validate } from 'class-validator';
import { product } from 'models';
import { Model } from 'sequelize-typescript';
import { createWriteStream, unlink } from 'fs';
import { extname, join } from 'path';
import { plainToClass } from 'class-transformer';

import {promises as fsPromise} from 'fs';
// import sequelize, { Sequelize } from 'sequelize';

@Injectable()
export class ProductDtoService {
  // constructor(private sequelize:Sequelize){}

  async create(createProductDtoDto: CreateProductDtoDto) {
    try{
      const result = await product.create(createProductDtoDto)
      return result
      }
    catch(e: any) {
      return e.message;
    }
  }

  

  async findAll() {
    try {
      const result = await product.findAll()
      return result
    } catch (error) {
      return error.message
      
    }
  }

  

  async findOne(id: number) {
    try{
      const result = await product.findOne({
        where :{
          product_id : id
        }
      });
      return result
      }
    catch(e: any) {
      return e;
    }
  }

  async update(id: number, updateProductDtoDto: UpdateProductDtoDto) {
    try{
    const result = await product.update(updateProductDtoDto,{
      where:{
          product_id : id
      }, returning : true}
      )
      return result
    }catch(e: any) {
    return e;
    }
  }

  async remove(id:number) :Promise<any>{
    try {
      const pid = await product.findByPk(id)
      if(!pid){
        throw new Error ('id ga ada')
      }
      const path = "./uploads/images/" + pid.image
      console.log()
      if(fsPromise.access(path)){

        await fsPromise.unlink(path);
        const result = await product.destroy({
          where : {
            product_id : id
          }
        })
  
      }
      const result = await product.destroy({
        where : {
          product_id : id
        }
      })

     
      return result
    } catch (error) {
      return error.message
    }
  }

}
