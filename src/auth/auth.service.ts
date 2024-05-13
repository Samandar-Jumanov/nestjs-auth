import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto  } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import prisma from 'prisma/prisma';


@Injectable()
export class AuthService {

   async   createUser({  username , pass } : RegisterDto) {
          const user = await prisma.user.findUnique({
               where : { username : username}
          })

          if(user){ 
                 throw  new HttpException("User already exists" , HttpStatus.BAD_REQUEST)
          }


          /// hash pass ( For now it is not done yet )
         
          const newUser = await prisma.user.create({
              data : {
                 username : username ,
                 password : pass 
              }
          })

          const { password , ...result } = newUser

          return result 
    }



    async  loginAccount( { username , pass } : LoginDto) {
         const user = await prisma.user.findUnique({
              where : { username : username }
         })


         if(!user){
              throw new UnauthorizedException()
         }

         const isPasswordMatch = user.password === pass;

         if(!isPasswordMatch) throw  new  HttpException("Password is not valid" , HttpStatus.BAD_REQUEST)


         const { password , ...result } = user;


         // Should generate token instead of user object  

         return result 


    }





}
