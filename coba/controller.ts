import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('products')
export class ProductsController {
  constructor(private readonly configService: ConfigService) {}

  @Get(':filename')
  getUploadedFile(@Param('filename') filename: string) {
    return {
      url: `${this.configService.get<string>('APP_URL')}/uploads/${filename}`,
    };
  }
}
