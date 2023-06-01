import { Injectable } from '@nestjs/common';
import { users, customer } from 'models';
import * as bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';
import { Express } from 'express';

@Injectable()
export class UsersService {
    constructor(
    private sequelize: Sequelize){}
    getUsers():string{
        try{
        return 'hallo users';
        }catch(e){
            return `$(e.message)`
        }
    }

    async findAll(): Promise<users[]>{
        try{
            const result = await users.findAll();
            return result;

        }catch(e){
            return e.message
        }
    }

    async createUser(fields: users , fields2 : customer): Promise<any>{
        let result :any ;
        try {
            const salt = await bcrypt.genSalt();
            const passHash = await bcrypt.hash(fields.password,salt);
            result = await users.create({
            user_name : fields.user_name,
            password: passHash,
            });
            if(result){
            const csResult = await customer.create({
                userid : result.id,
                firstname :fields2.firstname,
                lastname : fields2.lastname
                
            });
            return {result, csResult}
        }
            }catch(e){
                if(result) {
                  await users.destroy({
                    where: {
                      id: result.id
                    }
                  });
                }
                return{
                    error: e.message,
                    message: "gagal membuat data user telah dihapus"
                }
            }
         }
         async createUserCustomerSP(fields :any): Promise<any>{
          console.log(fields)
            try {
            
                const salt = await bcrypt.genSalt(10);
                const pass = await bcrypt.hash(fields.password, salt); 
                const  result = {
                  user_name: fields.user_name,
                  password: pass,
                  firstname: fields.firstname,
                  lastname: fields.lastname
    
                }
        
                const data = `[${JSON.stringify(result)}]`;
                const insertSP = await this.sequelize.query(`CALL public.inserdatasatu('${data}')`);
                
                return {result}
                
            } catch (e) {
                return e.message
                
            }
        }

        async updateUserCs(id: number, fields: any) {
          try {
            const result = await users.update(fields, {
              where: {
                id: id
              },
              returning: true
            });
            return result;
          } catch (e) {
            return e.message;
          }
        }
        

        // async joinUC() :Promise<any>{
        //     try {
        //       const data = await users.findAll({
        //         include:[{
        //           model: customer,
        //           as : 'customer',
        //         }]
        //       })
        //       console.log('123')
        //       return data
        //     } catch (err) {
        //       return err.message
        //       
        //     }
        //   }

          async joinView():Promise<any>{
            try {
              const data = await this.sequelize.query(` 
              SELECT users.id,
              users.user_name,
              customer.firstname,
              customer.lastname
              FROM users
              JOIN customer ON users.id = customer.userid`);
              return data
            } catch (error) {
              error.message
            }
          }

          async joinViewPagnation(fields: any): Promise<any> {
          
            const awal = fields[0].awal;
            const jumlah = fields[0].jumlah;
          
            try {
              const data = await this.sequelize.query(
                `SELECT users.id,
                users.user_name,
                customer.firstname,
                customer.lastname
                FROM users
                JOIN customer ON users.id = customer.userid
                ORDER BY users.id ASC
                OFFSET ${awal}
                LIMIT ${jumlah};
                SELECT count(users.id)
                FROM users
                JOIN customer ON users.id = customer.userid`
              );
          
              return data[0];
            } catch (error) {
              // Handle the error
              throw new Error(error.message);
            }
          }
          

          async findOne(id) {
            try{
              const result = await users.findOne({
                where :{
                  id : id
                }
              });
              return result
              }
            catch(e: any) {
              return e;
            }
          }

          async getByIdcs(id: number): Promise<any> {
            try {
              const data = await users.findOne({
                where: {
                  id: id,
                },
                include: [
                  {
                    model: customer,
                    as: 'customer',
                  },
                ],
              });
          
              return data;
            } catch (err) {
              return err.message;
            }
          }
          
          

          async surendah(id):Promise<any>{
            try {
              const data = await this.sequelize.query(` 
              SELECT users.id,
              users.user_name,
              customer.firstname,
              customer.lastname
              FROM users
              JOIN customer ON users.id 
              = customer.userid where users.id=${id}`);
              return data[0]
            } catch (error) {
              error.message
            }
          }




}