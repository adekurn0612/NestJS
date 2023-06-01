import { Injectable } from '@nestjs/common';
import { CreateUsercsdtoDto } from './dto/create-usercsdto.dto';
import { UpdateUsercsdtoDto } from './dto/update-usercsdto.dto';
import { users, customer } from 'models';
import * as bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UsercsdtoService {
  constructor(
    private sequelize: Sequelize){}
  create(createUsercsdtoDto: CreateUsercsdtoDto) {
    return 'This action adds a new usercsdto';
  }

  findAll() {
    return `This action returns all usercsdto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usercsdto`;
  }

  async update(id: number, updateUserDtoDto: UpdateUsercsdtoDto) {
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(updateUserDtoDto.password, salt);
      let transaction = await this.sequelize.transaction()
      const updatedUser = await users.update(
        {
          user_name: updateUserDtoDto.user_name,
          password: passHash,
        },
        {
          where: {
            id: id,
          },
          transaction,
          returning: true,
        },
      )
      const updatedCustomer = await customer.update({
        firstname: updateUserDtoDto.firstname,
        lastname: updateUserDtoDto.lastname
      },
      {
        where:{userid:id},
        transaction,
        returning: true

      },
      )

      await transaction.commit()
      return {updatedUser, updatedCustomer}; 
    } catch (error) {
      return error.message;
    }
  }


  async remove(id: number) {
    try {
      let transaction = await this.sequelize.transaction();
  
      // Hapus data pelanggan terlebih dahulu
      await customer.destroy({
        where: {
          userid: id,
        },
        transaction,
      });
  
      // Hapus data pengguna
      const deletedUserCount = await users.destroy({
        where: {
          id: id,
        },
        transaction,
      });
  
      await transaction.commit();
  
      if (deletedUserCount === 0) {
        throw new Error(`User with ID ${id} not found.`);
      }
  
      return `User with ID ${id} has been deleted successfully.`;
    } catch (error) {
      return error.message;
    }
  }
  
}
