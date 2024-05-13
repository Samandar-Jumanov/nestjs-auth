import { Controller  , Get ,  Post, Put , Delete , Body  } from '@nestjs/common';
import { UserAuthDto  , AuthLoginDto} from 'src/dto/authDto';



@Controller('auth')

export class AuthController {
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
