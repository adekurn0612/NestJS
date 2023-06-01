import { Body, Injectable, NestMiddleware, Next } from '@nestjs/common';
import { CreateLoginOdtDto } from './dto/create-login-odt.dto';
import { UpdateLoginOdtDto } from './dto/update-login-odt.dto';
import { Sequelize } from 'sequelize-typescript';
import { users } from 'models';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

@Injectable()
export class LoginOdtService {
  create(createLoginOdtDto: CreateLoginOdtDto) {
    return 'This action adds a new loginOdt';
  }

  async findAll() {
    try{
    const result = await users.findAll();
    return result
    }catch(e){
      return e.message
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} loginOdt`;
  }

  update(id: number, updateLoginOdtDto: UpdateLoginOdtDto) {
    return `This action updates a #${id} loginOdt`;
  }

  remove(id: number) {
    return `This action removes a #${id} loginOdt`;
  }

  async login(@Body() CreateLoginOdtDto:CreateLoginOdtDto){
    try {
      const user = await users.findOne({ 
        where: { user_name: CreateLoginOdtDto.user_name } 
      });
      if (user == null) {
        throw new Error('Invalid username');
      }
      const password1 = await bcrypt.compare(CreateLoginOdtDto.password, user.password);
      if (!password1) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ user_name: CreateLoginOdtDto.user_name,role:user.role}, 'secret_key', { expiresIn: '23H' });
      return ({ message: `Welcome ${CreateLoginOdtDto.user_name}`, token: token });
      // console.log(token)
    } catch (e) {
      return e.message
    }
    

}


}

