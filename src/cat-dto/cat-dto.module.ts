import { Module } from '@nestjs/common';
import { CatDtoService } from './cat-dto.service';
import { CatDtoController } from './cat-dto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { productcategory } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([productcategory])],
  controllers: [CatDtoController],
  providers: [CatDtoService]
})
export class CatDtoModule {}
