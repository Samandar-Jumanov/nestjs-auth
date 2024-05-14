import { Controller  , Get ,  Post, Put , Delete , Body , Param, Query, UseGuards  } from '@nestjs/common';


import { AuthService } from './auth.service';
import {  RegisterDto } from "./dto/register.dto"
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';



@Controller('auth')
export class AuthController {
     constructor( private authService  : AuthService) {}
     @Get()
     getUsers(){
               return this.authService.getAllUsers()
     }


     @Post()
     createAccount(@Body() authBody : RegisterDto ){
            console.log({...authBody})
            return this.authService.createUser(authBody)
     }


     @Put()
     @UseGuards(LocalGuard)
     loginAccount( @Body() loginBody  : LoginDto){
         return this.authService.loginAccount(loginBody  )
     }

     @Get()
     getUserQuery(@Query("role") role ? : "USER" | "ADMIN"){
          return { role }
     }


     @Delete()
     deleteAccount(){
           
     }


     @Get(":id")
     findOneUser(@Param("id") id : string ) {
          return this.authService.getUser(id)
     }


}
