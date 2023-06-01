import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, Put, NotFoundException } from '@nestjs/common';
import { ProductDtoService } from './product-dto.service';
import { CreateProductDtoDto } from './dto/create-product-dto.dto';
import { UpdateProductDtoDto } from './dto/update-product-dto.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { product } from 'models';
import { plainToClass } from 'class-transformer';
import fs from 'fs';
import {promises as fsPromise} from 'fs';



@Controller('product-dto')
export class ProductDtoController {
  constructor(private readonly productDtoService: ProductDtoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/images',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
        const fileExtName = extname(file.originalname);
        cb(null, `image-${randomName}${fileExtName}`);
      }
    })
  }))
  async upload(@UploadedFile() file: Express.Multer.File, @Body() createProductDtoDto: CreateProductDtoDto) {
    createProductDtoDto.image = file.filename;
    return this.productDtoService.create(createProductDtoDto);
  }


  @Get('/all')
  findAll() {
    return this.productDtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDtoService.findOne(+id);
  }


  @Put(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          const fileExtName = extname(file.originalname);
          cb(null, `image-${randomName}${Date.now()}${fileExtName}`);
        },
      }),
    }),
  )
  async update(
    @Param('id') id: number, // ubah tipe data dari string ke number
    @UploadedFile() file: Express.Multer.File,
    @Body() updateProductDto: UpdateProductDtoDto,
  ) {
    if (file) {
      updateProductDto.image = file.filename;
      // hapus gambar lama
      const product = await this.productDtoService.findOne(id);
      if (product.image){
      fsPromise.unlink(`./uploads/images/${product.image}`);
      // simpan gambar baru
      await this.productDtoService.update(id, updateProductDto);}
      else{
        await this.productDtoService.update(id, updateProductDto);
      }
    } else {
      await this.productDtoService.update(id, updateProductDto);
    }

   


  
  




  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productDtoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDtoDto: UpdateProductDtoDto) {
  //   return this.productDtoService.update(+id, updateProductDtoDto);
  // }

  

  
}

@Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDtoService.remove(+id);
  }


}
