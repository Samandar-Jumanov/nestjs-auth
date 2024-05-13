import { Injectable } from '@nestjs/common';
import { AuthLoginDto , UserAuthDto } from 'src/dto/authDto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {


    createUser({  username , password } : RegisterDto) {
           return username 
    }

    loginAccount( { username , password } : AuthLoginDto) {
        return username 
    }




}
