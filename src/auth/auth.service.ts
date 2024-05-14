import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto  } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import prisma from "../utils/lib/prisma"
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
 
     constructor(   private jwt : JwtService) {}

   async   createUser(body : RegisterDto)  {
          const user = await prisma.user.findUnique({
               where : { username : body.username}
          })

          if(!body || 
               !body.username ||
                !body.password) {
               throw new HttpException("Username or Password not provided" , HttpStatus.BAD_REQUEST)
          }


          if(user){ 
                 throw  new HttpException("User already exists" , 409)
          }
         
          const newUser = await prisma.user.create({
              data : {
                 username : body.username ,
                 password : body.password 
              }
          })

          const { password , ...result } = newUser

          return result 
    }




    async  loginAccount( loginDto: LoginDto , ) {
         const user = await prisma.user.findUnique({
              where : { username : loginDto.username },
              select : { username :true , password : true , id : true  }
         })

         if(!user) return new UnauthorizedException();
         
         if(user.password !== loginDto.password) return new  HttpException("Password did not match" , 403)
         const { password , ...result } = user;

         return  this.jwt.sign(result)

    }

    async getAllUsers(){
       try {

          const allUsers = await prisma.user.findMany({
               select  :{
                     id : true ,
                      username : true ,
                      password : true 
               }
          })

          return allUsers 
          
       } catch (error) {

          throw new HttpException("Something went wrong" , HttpStatus.INTERNAL_SERVER_ERROR)
          
       }
    }



    async deleteOneUser( id : string ) {
       
         const user = await prisma.user.findUnique({
            where : { id }
         })

         if(!user) {
              throw new HttpException("Uer not found " , HttpStatus.NOT_FOUND)
         }

         await prisma.user.delete({
            where : { id }
         })


         return user 
    }


    async getUser( id : string ) {
       const user = await prisma.user.findUnique({
            where : { id },
            select : {
                 username : true ,
                 password : true ,
                 id : true 
            }
       })


       if(!user) {
            throw new HttpException("User not found" , HttpStatus.NOT_FOUND)
       }



       return user 
    }

}
