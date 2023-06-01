import { Controller, Get, Post , Body , Put, Param, Patch} from '@nestjs/common';
import { UsersService,  } from './users.service';
import { users, customer } from 'models';


@Controller('users')
export class UsersController {
    constructor(private readonly  UsersService:UsersService){
    }
    @Get()
    // @UseGuards()
    getAll(): String{
     return this.UsersService.getUsers();
    }

    @Get('/cs/:id')
    findOne(@Param('id') id: any) {
        return this.UsersService.findOne(id);
    }

    @Get('get/:id')
    findOnecs(@Param('id') id: number) {
        return this.UsersService.surendah(+id);
    }

    @Get("/all")
    async getAllall() :  Promise<users[]>{
        return this.UsersService.findAll();
    }

    @Post("/createUser")
    async createUser(@Body() fields: users, @Body() fields2: customer) {
    return this.UsersService.createUser(fields, fields2);
    }
    @Post("/userCsSp")
    async createUserCustomerSP(@Body() fields){
     return this.UsersService.createUserCustomerSP(fields);
    }
    @Post('userCsPag')
    async getUserPagnation(@Body() fileds){
        return this.UsersService.joinViewPagnation(fileds);
    }

    // @Patch("update/:id")
    // async updateUserCs(
    //   @Param('id') id: number,
    //   @Body() fields: users,){
    //   return this.UsersService.updateUserCs(id, fields);
    // }
    

    @Get("usercus")
    async joinUC(){
        return this.UsersService.joinView()
    }

    // @Get("ucview")
    // async joinView(){
    //     return this.UsersService.joinView()
    // }

}
