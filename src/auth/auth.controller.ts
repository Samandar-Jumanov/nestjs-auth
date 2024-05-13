import { Controller  , Get ,  Post, Put , Delete , Body  } from '@nestjs/common';


import { AuthService } from './auth.service';
import {  RegisterDto } from "./dto/register.dto"
import { LoginDto } from './dto/login.dto';



@Controller('auth')
export class AuthController {
     constructor( private authService  : AuthService) {}
     @Get()
     getUser(){
              
     }


     @Post()
     createAccount(@Body() authBody : RegisterDto ){
            return this.authService.createUser(authBody)
     }


     @Post ()
     loginAccount( @Body() loginBody  : LoginDto){
         return this.authService.loginAccount(loginBody)
     }



     @Put()
     updateAccount(@Body()  loginBody : LoginDto) {
           
     }


     @Delete()
     deleteAccount(){
        
     }
}
