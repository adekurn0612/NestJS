import { Module } from '@nestjs/common';
import { UsercsdtoService } from './usercsdto.service';
import { UsercsdtoController } from './usercsdto.controller';

@Module({
  controllers: [UsercsdtoController],
  providers: [UsercsdtoService]
})
export class UsercsdtoModule {}
