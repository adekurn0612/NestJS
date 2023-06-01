import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards} from '@nestjs/common';
import { UsercsdtoService } from './usercsdto.service';
import { CreateUsercsdtoDto } from './dto/create-usercsdto.dto';
import { UpdateUsercsdtoDto } from './dto/update-usercsdto.dto';
import { Roles } from 'src/Guards/roles_decorator';
import { RolesGuard } from 'src/Guards/role_Guards';

@Controller('usercsdto')
export class UsercsdtoController {
  constructor(private readonly usercsdtoService: UsercsdtoService) {}

  @Post()
  create(@Body() createUsercsdtoDto: CreateUsercsdtoDto) {
    return this.usercsdtoService.create(createUsercsdtoDto);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin')
  findAll() {
    return this.usercsdtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usercsdtoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsercsdtoDto: UpdateUsercsdtoDto) {
    return this.usercsdtoService.update(+id, updateUsercsdtoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usercsdtoService.remove(+id);
  }
}
// function UseGuards(RolesGuard: typeof RolesGuard): (target: UsercsdtoController, propertyKey: "findAll", descriptor: TypedPropertyDescriptor<() => string>) => void | TypedPropertyDescriptor<() => string> {
//   throw new Error('Function not implemented.');
// }

