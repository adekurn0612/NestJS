import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService:CustomersService){
    }
    @Get()
    getAll(): String{
        return this.customersService.getCustumers();
    }


}
