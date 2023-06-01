import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatDtoService } from './cat-dto.service';
import { CreateCatDtoDto } from './dto/create-cat-dto.dto';
import { UpdateCatDtoDto } from './dto/update-cat-dto.dto';

@Controller('cat-dto')
export class CatDtoController {
  constructor(private readonly catDtoService: CatDtoService) {}

  @Post()
  create(@Body() createCatDtoDto: CreateCatDtoDto) {
    return this.catDtoService.create(createCatDtoDto);
  }

  @Get()
  findAll() {
    return this.catDtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catDtoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDtoDto: UpdateCatDtoDto) {
    return this.catDtoService.update(+id, updateCatDtoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catDtoService.remove(+id);
  }
}
