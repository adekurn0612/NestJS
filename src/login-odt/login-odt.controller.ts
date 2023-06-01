import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Next, UseGuards } from '@nestjs/common';
import { LoginOdtService } from './login-odt.service';
import { CreateLoginOdtDto } from './dto/create-login-odt.dto';
import { UpdateLoginOdtDto } from './dto/update-login-odt.dto';
import * as jwt from "jsonwebtoken";
// import { AuthGuard } from 'src/Guards/auth_Guards';
import { Roles } from 'src/Guards/roles_decorator';

@Controller('login-odt')
export class LoginOdtController {
  constructor(private readonly loginOdtService: LoginOdtService) {}

  @Post()
  create(@Body() createLoginOdtDto: CreateLoginOdtDto) {
    return this.loginOdtService.create(createLoginOdtDto);
  }

  @Get()
  // @Roles('user')
  findAll() {
    return this.loginOdtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginOdtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginOdtDto: UpdateLoginOdtDto) {
    return this.loginOdtService.update(+id, updateLoginOdtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginOdtService.remove(+id);
  }

  @Post("login")
  login(@Body() loginOdtDto: CreateLoginOdtDto) {
    return this.loginOdtService.login(loginOdtDto);
  }
  
@Post("cektoken")
checkToken(@Headers('Authorization')Authorization:string) {
  try {
    const token = Authorization;
    jwt.verify(token, 'secret_key');
   Next()
  } catch (error) {
    return { message: 'Invalid token: ' + error.message };
  }
}


  
}
