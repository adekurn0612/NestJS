import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategoryController } from './product-category/product-category.controller';
import { ProductCategoryService } from './product-category/product-category.service';
import { ProductCategoryModule } from './product-category/product-category.module';
import { CatDtoModule } from './cat-dto/cat-dto.module';
import { ProductDtoModule } from './product-dto/product-dto.module';
import "dotenv/config"
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsController } from 'coba/controller';
import { OrdersModule } from './orders/orders.module';
// import { ProductPcJoinModule } from './product-pc-join/product-pc-join.module';
import { ProductPcModule } from './product-pc/product-pc.module';
import { OrderOdModule } from './order-od/order-od.module';
import { LoginOdtModule } from './login-odt/login-odt.module';
import { LoggerMiddleware } from 'Security/Middlewere/Middlewere';
import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from 'src/Guards/auth_Guards';
import { UsercsdtoModule } from './usercsdto/usercsdto.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthGuard } from './Guards/auth_Guards';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads/images'),
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        models: [],
        autoLoadModels: true, //untuk generate semua tabel
      }),
    }),
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      
    UsersModule, CustomersModule, ProductCategoryModule, CatDtoModule, ProductDtoModule, OrdersModule, ProductPcModule, OrderOdModule, LoginOdtModule, UsercsdtoModule, ],
  controllers: [],
  providers: [
    // {
  //     provide: APP_GUARD,
  //     useClass: AuthGuard
  //   },
  //   {
  //   provide: 'ROLES_METADATA',
  //   useValue: ['admin', 'user']
  // }
  ],
})

export class AppModule{}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .exclude(
//         'login-odt/(.*)',
//       )
//       .forRoutes('*');
//   }
// }
