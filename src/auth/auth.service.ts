import { Injectable } from '@nestjs/common';
import { AuthLoginDto , UserAuthDto } from 'src/dto/authDto';


@Injectable()
export class AuthService {


    createUser({  username , password } : UserAuthDto) {
           return username 
    }

    loginAccount( { username , password } : AuthLoginDto) {
        return username 
    }




}
