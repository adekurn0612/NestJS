import { Module } from '@nestjs/common';
import { LoginOdtService } from './login-odt.service';
import { LoginOdtController } from './login-odt.controller';

@Module({
  controllers: [LoginOdtController],
  providers: [LoginOdtService]
})
export class LoginOdtModule {}
