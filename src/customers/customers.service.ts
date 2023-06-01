import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    getCustumers(): string{
        try{
            return 'Hello Costumers';
        }catch(e){
            return e.message;
        }
    }
}
