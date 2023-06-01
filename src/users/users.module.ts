import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { customer, product, productcategory, users } from 'models';

@Module({
    imports: [SequelizeModule.forFeature([users, customer])],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule {}
