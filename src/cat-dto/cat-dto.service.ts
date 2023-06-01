import { Injectable } from '@nestjs/common';
import { CreateCatDtoDto } from './dto/create-cat-dto.dto';
import { UpdateCatDtoDto } from './dto/update-cat-dto.dto';
import { productcategory } from 'models';
import { where } from 'sequelize';

@Injectable()
export class CatDtoService {
  

  async create(createCatDtoDto: CreateCatDtoDto) {
    try{
    const result = await productcategory.create(createCatDtoDto)
    return result
    }
  catch(e: any) {
    return e;
  }
  }

  async findAll() {
    try{
      const result = await productcategory.findAll()
      return result
      }
    catch(e: any) {
      return e;
    }
  }

  async findOne(id: number) {
    try{
      const result = await productcategory.findOne({
        where :{
          id : id
        }
      });
      return result
      }
    catch(e: any) {
      return e;
    }
  }

  async update(id: number, updateCatDtoDto: UpdateCatDtoDto) {
    try{
    const result = await productcategory.update(updateCatDtoDto,{
      where:{
          id : id
      }, returning : true}
      )
      return result
    }catch(e: any) {
    return e;
    }
  }

  async remove(id: number) {
    try{
      const result = await productcategory.destroy({
        where:{
            id : id
        }})
        return `berhasil delete product category dengan id : ${id} `
      }catch(e: any) {
      return e;
      }
  }
}
