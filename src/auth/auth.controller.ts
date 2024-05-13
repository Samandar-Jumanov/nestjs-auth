import { Controller  , Get ,  Post, Put , Delete , Body  } from '@nestjs/common';
import { UserAuthDto  , AuthLoginDto} from 'src/dto/authDto';
import { AuthService } from './auth.service';


@Controller('auth')

export class AuthController {
     constructor(authService  : AuthService) {}
     @Get()
     getUser(){
            
     }


     @Post()
     createAccount(@Body() authBody : UserAuthDto ){
            console.log(authBody)
     }



     @Put()
     updateAccount(@Body()  loginBody : AuthLoginDto) {}


     @Delete()
     deleteAccount(){
        
     }
}
