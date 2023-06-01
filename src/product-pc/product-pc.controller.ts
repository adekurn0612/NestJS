import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductPcService } from './product-pc.service';
import { CreateProductPcDto } from './dto/create-product-pc.dto';
import { UpdateProductPcDto } from './dto/update-product-pc.dto';

@Controller('product-pc')
export class ProductPcController {
  constructor(private readonly productPcService: ProductPcService) {}

  @Post()
  create(@Body() createProductPcDto: CreateProductPcDto) {
    return this.productPcService.create(createProductPcDto);
  }

  @Get("sp")
  findAllSP() {
    return this.productPcService.findAllSP();
  }
  @Get("all")
  findAll() {
    return this.productPcService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductPcDto: UpdateProductPcDto) {
    return this.productPcService.update(+id, updateProductPcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPcService.remove(+id);
  }
}
